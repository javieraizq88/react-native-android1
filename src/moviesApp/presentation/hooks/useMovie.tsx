import { useEffect, useState } from "react"
import { View } from "react-native"
import * as UseCases from "../../core/use-case";
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter";
import { FullMovie } from "../../core/models/movie.model";
import { Cast } from "../../core/models/cast.model";

export const useMovie = (movieId: number) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState<FullMovie>();
    const [cast, setCast] = useState<Cast[]>();

    useEffect(() => {
        loadMovie();
    }, [movieId])

    const loadMovie = async () => {
        setIsLoading(true);

        const fullMoviePromise = UseCases.getMovieByIdUseCase(movieDBFetcher, movieId);
        const castPromise = UseCases.getMovieGetCastUseCase(movieDBFetcher, movieId);

        const [fullMovie, cast] = await Promise.all([fullMoviePromise, castPromise])

        setMovie(fullMovie);
        setIsLoading(false);

        setCast(cast);

    }
    return {
        isLoading,
        movie,
        cast
    }
}
