import { Pressable, Text, View } from "react-native"
import { styles } from "../../../config/app-theme"
import { useCounterStore } from "../../store/counter-store";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export const SettingsScreen = () => {
    const count = useCounterStore(state => state.count);
    const cambiarNumero = useCounterStore(state => state.aumentar);

    const navigation = useNavigation();

    // TODO cambia el titulo a count
    useEffect(() => {
        navigation.setOptions({
            title: `Count: ${count} `
        })

    }, [count])

    return (
        <View style={styles.container}>
            <Text style={styles.title} > count: {count} </Text>

            <Pressable
                style={styles.primaryButton}
                onPress={() => cambiarNumero(+1)}
            >
                <Text>+1</Text>
            </Pressable>
            <Pressable
                style={styles.primaryButton}
                onPress={() => cambiarNumero(-1)}
            >
                <Text>-1</Text>
            </Pressable>

        </View>
    )
}