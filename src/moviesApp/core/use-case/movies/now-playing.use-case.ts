
import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { Movie } from "../../models/movie.model";

// TODO trae las peliculas
export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {

    try {

        const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing')
        return [];
    } catch (error) {
        console.log(error);
        throw new Error(`Error fetching movies - NowPlaying`);
    }
}