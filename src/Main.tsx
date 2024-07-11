import { Text, View } from "react-native"
import { BottomTabsNavigator } from "./zustand/presentation/navigators/BottomTabsNavigator"
import { NavigationContainer } from "@react-navigation/native"
import React from "react"

export const Main =() => {
    return(
        <NavigationContainer>
            <Text>Main</Text>

            <BottomTabsNavigator/>

        </NavigationContainer>
    )
}