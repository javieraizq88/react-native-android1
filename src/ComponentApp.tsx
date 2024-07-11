import { NavigationContainer } from "@react-navigation/native"
import { Navigator } from "./componentApp/presentation/navigator/NavigatorAppComp"

export const ComponentApp = () => {
    return (
        <NavigationContainer>
            <Navigator />

        </NavigationContainer>
    )
}