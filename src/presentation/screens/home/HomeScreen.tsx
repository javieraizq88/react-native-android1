import { Pressable, Text, View } from "react-native"
import { globalStyles } from "../../../config/theme/global.styles"
import { type NavigationProp, useNavigation, DrawerActions } from "@react-navigation/native"
import { PrimaryButton } from "../../components"
import { type RootStackParams } from "../../routes/StackNavigation"
import { useEffect } from "react"

export const HomeScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
                >
                    <Text>Menu</Text>
                </Pressable>
            )
        })
    }, [])

    return (
        <View style={globalStyles.container} >
            <PrimaryButton
                label={"Products"}
                onPress={() => navigation.navigate('Products')} />

            <PrimaryButton
                label="Settings"
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    )
}