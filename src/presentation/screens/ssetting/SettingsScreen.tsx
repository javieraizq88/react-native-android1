import { Text, View } from "react-native"
import { globalStyles } from "../../../config/theme/global.styles"
import { StackActions, useNavigation } from "@react-navigation/native"
import { PrimaryButton } from "../../components";

export const SettingsScreen = () => {

    const navigator = useNavigation();

    return (
        <View style={globalStyles.container} >
            <Text style={{ marginBottom: 10 }}>SettingsScreen</Text>

            <PrimaryButton
                label="Volver"
                onPress={() => navigator.goBack()}
            />
      <PrimaryButton
                label="Home"
                onPress={() => navigator.dispatch( StackActions.popToTop )}
            />

        </View>
    )
}