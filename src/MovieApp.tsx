import { Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { Navigation } from "./moviesApp/presentation/navigators/NavigationMovie"

export const MovieApp = () => {
    return (
        <NavigationContainer>
    
            <Navigation />
      
        </NavigationContainer>
    )
}