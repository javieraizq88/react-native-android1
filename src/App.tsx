import { View, StatusBar } from "react-native"
import React, { } from "react"
import { CalculatorScreen } from "./presentation/screens/CalculatorScreen"
import { globalStyles } from "./config/theme/global.styles"



export const App = () => {
  return (
      <View style={ globalStyles.background }>
        <StatusBar
          backgroundColor={'black'}
          barStyle={"light-content"}
        />
        <CalculatorScreen />
      </View>
  )
}
