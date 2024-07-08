import { Movie } from "../../core/models/movie.model";
import type { Result } from "../interfaces/movie-db.responses";

export class MovieMapper {

    // TODO creo una nueva interface desde la interface Result q llegan los datos de la BBDD
    static fromMovieDBResultToModel( result: Result): Movie {
        return {
            id: result.id,
            title: result.title,
            description: result.overview,
            releaseDate: new Date ( result.release_date ), // TODO string lo transformo a fecha
            rating: result.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${ result.poster_path }`,
            background: `https://image.tmdb.org/t/p/w500${ result.backdrop_path }`,
        }
    }
}