import { View, Text, SafeAreaView } from "react-native"
import { HelloWorldScreen } from "./src/presentation/screens/HelloWorldScreen"

export const App = () => {
  return (
    <SafeAreaView>
      <HelloWorldScreen name="Javiera Izquierdo"  />
    </SafeAreaView>
  )
}
