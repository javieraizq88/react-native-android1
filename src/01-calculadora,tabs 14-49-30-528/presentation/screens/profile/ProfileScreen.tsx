import { useNavigation, DrawerActions } from "@react-navigation/native";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PrimaryButton } from "../../../../calculadora,tabs/presentation/components";

export const ProfileScreen = () => {

    const { top } = useSafeAreaInsets();
    const navigation = useNavigation();

    return (
        <View style={{
            flex: 1,
            paddingHorizontal: 20,
            marginTop: 20
        }}>
            <Text>ProfileScreen</Text>

            <PrimaryButton
                label={' hola'}
                onPress={() => navigation.dispatch( DrawerActions.toggleDrawer )}
            />

        </View>
    )
}