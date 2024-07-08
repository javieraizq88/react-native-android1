import { View, Text } from "react-native"
import { useMovies } from "../../hooks/useMovies"
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PosterCarousel } from "../../components/movies/PosterCarousel";

export const HomeScreenMovie = () => {
    const { top } = useSafeAreaInsets();

    const { isLoading, nowPlaying } =useMovies();

    if (isLoading) {
        return <Text>cargando...</Text>;
    }



    return (
        <ScrollView>
            <PosterCarousel movies={nowPlaying} />
        </ScrollView>
    )
}