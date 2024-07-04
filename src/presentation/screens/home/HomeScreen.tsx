import { Pressable, Text, View } from "react-native"
import { globalStyles } from "../../../config/theme/global.styles"
import { type NavigationProp, useNavigation } from "@react-navigation/native"
import { PrimaryButton } from "../../components"
import {type  RootStackParams } from "../../routes/StackNavigation"

export const HomeScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();
    
    return (
        <View style={globalStyles.container} >
            <PrimaryButton
                label={"Products"}
                onPress={() => navigation.navigate('Products' )} />

            <PrimaryButton
                label="Settings"
                onPress={() => navigation.navigate('Settings' )}
            />
        </View>
    )
}