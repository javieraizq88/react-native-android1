import { View, Text, SafeAreaView } from "react-native"
import { HelloWorldScreen } from "./src/presentation/screens/HelloWorldScreen"
import { CounterScreen } from "./src/presentation/screens/CounterScreen"
import React from "react"
import { PaperProvider } from 'react-native-paper'
import { CounterM3Screen } from "./src/presentation/screens/CounterM3Screen"


import IonIcon from 'react-native-vector-icons/Ionicons'
import { BoxObjectModelScreen } from "./src/presentation/screens/BoxObjectModelScreen"

export const App = () => {
  return (
    <PaperProvider 
      settings={{
        icon: (props) => <IonIcon {...props} />
      }}
    >

      <SafeAreaView style={{ backgroundColor: 'rgba(189, 52, 52, 0.2)', flex: 1 }}>
        {/* <HelloWorldScreen name="Javiera Izquierdo" />  */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen label={"Aumentar"} /> */}
        <BoxObjectModelScreen/>

      </SafeAreaView>
    </PaperProvider>
  )
}
