import { useRoute } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { View, Text } from "react-native";
import { RootStackParams } from "../../navigators/NavigationMovie";
import { useMovie } from "../../hooks/useMovie";


interface Props extends StackScreenProps<RootStackParams, 'Details'> { }

export const DetailScreen = ({ route }: Props) => {
    const { movieId } = route.params;
    // const { movieId } = useRoute().params;



    return (
        <View>
            <Text>DetailScreenMovie</Text>

        </View>
    )
}


