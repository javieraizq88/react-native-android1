import { View, Text, StyleSheet } from "react-native"

export const HelloWorldScreen = () => {
    return (
        <View style={ styles.container } >
            <Text style={ styles.title } >HelloWorldScreen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
        color: 'black',
        padding: 20
    }


})
