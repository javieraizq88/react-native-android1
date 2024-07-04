import { Pressable, Text, View } from "react-native"
import { globalStyles } from "../../../config/theme/global.styles"
import { useNavigation } from "@react-navigation/native"
import { PrimaryButton } from "../../components"

export const HomeScreen = () => {

    const navigation = useNavigation();
    return (
        <View style={globalStyles.container} >
            <PrimaryButton
                label={"Products"}
                onPress={() => navigation.navigate('Products' as never)} />

            <PrimaryButton
                label="Settings"
                onPress={() => navigation.navigate('Settings' as never)}
            />
        </View>
    )
}