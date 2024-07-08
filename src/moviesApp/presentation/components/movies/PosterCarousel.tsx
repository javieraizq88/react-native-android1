import { View, Text } from "react-native"
import { useMovies } from "../../hooks/useMovies"
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Movie } from "../../../core/models/movie.model";
import { MoviePoster } from "./MoviePoster";



interface Props {
    movies: Movie[];
    height?: number;
}

export const PosterCarousel = ({ height = 440, movies }: Props) => {

    return (

        <View style={{ height }} >
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {
                    movies.map(movie => (
                    <MoviePoster
                     key={movie.id} 
                    movie={ movie }
                    />
                    ) )}
            </ScrollView>
        </View>


    )
}