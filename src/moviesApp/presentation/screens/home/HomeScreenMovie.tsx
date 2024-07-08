import { View, Text } from "react-native"
import { useMovies } from "../../hooks/useMovies"

export const HomeScreenMovie =() => {


    const {} = useMovies();
    
    return(
        <View>
            <Text>HomeScreenMovie</Text>

        </View>
    )
}