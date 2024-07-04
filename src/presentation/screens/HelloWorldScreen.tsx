import { View, Text, StyleSheet } from "react-native"

interface Props {
    name?: string;
}


export const HelloWorldScreen = ( {name = 'mundo'}: Props ) => {
    return (
        <View style={ styles.container } >
            <Text numberOfLines={1} ellipsizeMode="tail"  style={ styles.title } >hola, {name} </Text>
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
