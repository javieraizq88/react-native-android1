import { useEffect, useState } from "react"
import { View, Text } from "react-native"
import type { Movie } from "../../core/models/movie.model"

import * as UseCases from '../../core/use-case'
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter"



export const useMovies = () => {


    const [isLoading, setIsLoading] = useState(true); // TODO cuando se muestre, empieza a cargar
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

    useEffect(() => {

        initialLoad();

    }, []);

    const initialLoad = async () => {

        // TODO crea un await mientras carga la data de movieDBFetcher 
        const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(movieDBFetcher);
        console.log(nowPlayingMovies[0])
    }
    return {
        isLoading,
        nowPlaying,
    }
}