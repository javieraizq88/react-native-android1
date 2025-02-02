import { useNavigation, NavigationProp, DrawerActions } from "@react-navigation/native";
import { useEffect } from "react";
import { Pressable, Text, View } from "react-native"
import { RootStackParams } from "../routes/StackNavigation";

export const HamburgerMenu = () =>{
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

    return (<></>);
}