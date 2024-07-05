import { Text, View } from "react-native"
import { BottomTabsNavigator } from "./zustand/presentation/navigators/BottomTabsNavigator"
import { NavigationContainer } from "@react-navigation/native"
import { HomeScreenMovie } from "./moviesApp/presentation/screens/home/HomeScreen"
import { DetailScreenMovie } from "./moviesApp/presentation/screens/details/DetailsScreenMovie"

export const MovieApp = () => {
    return (
        <NavigationContainer>
            <Text>Main</Text>

            <HomeScreenMovie />
            <DetailScreenMovie />
        </NavigationContainer>
    )
}