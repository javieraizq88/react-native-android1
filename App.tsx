import { View, Text, SafeAreaView } from "react-native"
import { HelloWorldScreen } from "./src/presentation/screens/HelloWorldScreen"
import { CounterScreen } from "./src/presentation/screens/CounterScreen"

export const App = () => {
  return (
    <SafeAreaView>
      {/* <HelloWorldScreen name="Javiera Izquierdo" />  */}
      <CounterScreen />
    </SafeAreaView>
  )
}
