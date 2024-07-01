import { useState } from "react"
import { Button, Platform, Pressable, StyleSheet, Text, View } from "react-native"

export const CounterScreen = () => {

const [count, setCount] = useState(10)

    return (
        <View style={styles.container} >
            <Text style={styles.title} >{count}</Text>

            <Pressable
                onPress={ () => setCount( count + 1) }
                onLongPress={ () => setCount(0)}
                style= {({ pressed }) => [
                    styles.button,
                    pressed && styles.buttonPressed
                ] }
            >
                <Text style={{
                    color: Platform.OS === 'android' ? 'white' : '#4746AB'
                    }} >Aumentar</Text>
            </Pressable>


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    title: {
        fontSize: 45,
        color: 'black',
    },
    button: {
        backgroundColor: Platform.OS === 'android' ?  '#5856D6' : 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    buttonPressed: {
        backgroundColor: Platform.OS === 'android' ?  '#4746AB' : 'white'
    }

})