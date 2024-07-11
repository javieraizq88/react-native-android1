import { AxiosAdapter } from "./http/axios.adapter";


//TODO crea ruta para tener las peliculas en espanol 
export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'd01cbb84efac36e9f47b7d3b609caacd',
        language: 'es'
    }

})