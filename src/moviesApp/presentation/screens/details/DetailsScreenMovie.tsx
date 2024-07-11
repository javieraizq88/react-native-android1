import { StackScreenProps } from "@react-navigation/stack";
import { View, Text } from "react-native";
import { RootStackParams } from "../../navigators/NavigationMovie";
import { useMovie } from "../../hooks/useMovie";
import { MovieHeader } from "../../components/movie/MovieHeader";


interface Props extends StackScreenProps<RootStackParams, 'Details'> { }

export const DetailScreen = ({ route }: Props) => {

    const { movieId } = route.params;
    // const { movieId } = useRoute().params;
    const { isLoading, movie } = useMovie(movieId);

    if (isLoading) {
        return <Text>Loading </Text>
    }

    return (
        <View>
            {/* header */}
            <MovieHeader
                originalTitle={movie!.originalTitle}
                poster={movie!.poster}
                title={movie!.title}
            />
        </View>
    )
}


