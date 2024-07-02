import { Platform, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create ({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        

    },
    title: {
        fontSize: 45,
        color: 'black',
    },
    fab: {
        position: 'absolute',
        margin: 16,
        top: Platform.OS === 'android' ? 45 : 55,
      },

})