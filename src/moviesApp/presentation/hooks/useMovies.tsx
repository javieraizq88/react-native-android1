import { useEffect, useState } from "react"
import { View, Text } from "react-native"
import type { Movie } from "../../core/models/movie.model"

import * as UseCases from '../../core/use-case'
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter"

// 1) se crean los state y setState de lo que viene en Movie
// 2) se deja corriendo el loading mientras carga la data de los endPoints
// 3) se hacen todas las peticiones a la vez de movieDBFetcher
// 4) se espera la respuesta de cada una de ellas
// 5) los valores se agregan los valores en unaa const temporales
// 6) se cambia el state
// 7) se saca el loading pq ya cargaron las peliculas

export const useMovies = () => {
    // 1) se crean los state y setState de lo que viene en Movie
    const [isLoading, setIsLoading] = useState(true); // TODO cuando se muestre, empieza a cargar
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const [upcoming, setUpcoming] = useState<Movie[]>([]);

    // 2) se deja corriendo el loading mientras carga la data de los endPoints
    useEffect(() => {
        initialLoad();
    }, []);

    const initialLoad = async () => {

        // 3) se hacen todas las peticiones a la vez de movieDBFetcher
        const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
        const popularPromise = UseCases.moviesPopularUseCase(movieDBFetcher);
        const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBFetcher);
        const upcomingPromise = UseCases.moviesUpcomingUseCase(movieDBFetcher);

        // TODO haga todas las peticiones a la vez
        const [
            nowPlayingMovies,
            popularMovies,
            topRatedMovies,
            upcomingMovies,

        ] = await Promise.all([
            // 4) se espera la respuesta de cada una de ellas
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise,
        ]);
        // 5) los valores se agregan los valores en unaa const temporales
        // 6) se cambia el state
        setNowPlaying(nowPlayingMovies);
        setPopular(popularMovies);
        setTopRated(topRatedMovies);
        setUpcoming(upcomingMovies);

        // 7) se saca el loading pq ya cargaron las peliculas
        setIsLoading(false)

    }
    return {
        isLoading,
        nowPlaying,
        popular,
        topRated,
        upcoming
    }
}