import 'react-native-gesture-handler';
import { View, StatusBar, Text } from "react-native"
import React, { } from "react"
import { CalculatorScreen } from "./presentation/screens/CalculatorScreen"
import { globalStyles } from "./theme/global.styles"
import { CalculatorPixelScreen } from "./presentation/screens/CalculatorPixelScreen"
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/routes/StackNavigation';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';
import { BottomTabsNavigator } from './presentation/routes/BottomTabsNavigator';



export const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={'black'}
        barStyle={"light-content"}
      />
      {/* <CalculatorScreen /> */}
      {/* <CalculatorPixelScreen /> */}
      {/* <StackNavigator /> */}
      <SideMenuNavigator />
      {/* <BottomTabsNavigator /> */}

    </NavigationContainer>

  )
}
