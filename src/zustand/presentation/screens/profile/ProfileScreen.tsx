import { Pressable, Text, View } from "react-native"
import { styles } from "../../../config/app-theme"
import { useProfileStore } from "../../store/profile-store"


export const ProfileScreen = () => {

    //TODO se dispara cuando el nombre o el email cambian
    const name = useProfileStore(state => state.name);
    const email = useProfileStore(state => state.email);

    //TODO cambiar el state de name y email
    const changeProfile = useProfileStore(state => state.changeProfile);


    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.title}>{email}</Text>

            <Pressable
                style={styles.primaryButton}
                onPress={() => useProfileStore.setState({ name: 'Javiera' })}
            >
                <Text>Cambiar nombre</Text>
            </Pressable>
            <Pressable
                style={styles.primaryButton}
                onPress={() => useProfileStore.setState({ email: 'cambio el email' })}
            >
                <Text>Cambiar email</Text>
            </Pressable>
            <Pressable
                style={styles.primaryButton}
                onPress={() => changeProfile('Juan', 'correo1')}
            >
                <Text>Volver a Juan</Text>
            </Pressable>
        </View>
    )
}


