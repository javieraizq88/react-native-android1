import { NavigationContainer } from "@react-navigation/native"
import { Text, View } from "react-native"
import { AirplaneIcon } from "../../icons/Icons"


export const HomeScreen = () => {
    return (
        <NavigationContainer>

            <View>
                <Text>HomeScreen</Text>
            </View>
            <AirplaneIcon />
        </NavigationContainer>
    )
}
