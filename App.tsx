import { View, Text, SafeAreaView } from "react-native"
import { HelloWorldScreen } from "./src/presentation/screens/HelloWorldScreen"
import { CounterScreen } from "./src/presentation/screens/CounterScreen"
import React from "react"
import { PaperProvider } from 'react-native-paper'

export const App = () => {
  return (
    <PaperProvider>

    <SafeAreaView>
      {/* <HelloWorldScreen name="Javiera Izquierdo" />  */}
      <CounterScreen />
    </SafeAreaView>
    </PaperProvider>
  )
}
