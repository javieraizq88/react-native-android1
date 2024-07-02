import { Platform, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create ({
    container: {
        backgroundColor:'#ffffff',
        flex: 1
    },
    title: {
        fontSize: 30,
     borderWidth: 10,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        top: Platform.OS === 'android' ? 45 : 55,
      },
      

})