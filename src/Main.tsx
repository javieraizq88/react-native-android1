import { Text, View } from "react-native"
import { BottomTabsNavigator } from "./zustand/presentation/navigators/BottomTabsNavigator"
import { NavigationContainer } from "@react-navigation/native"

export const Main =() => {
    return(
        <NavigationContainer>
            <Text>Main</Text>

            <BottomTabsNavigator/>

        </NavigationContainer>
    )
}