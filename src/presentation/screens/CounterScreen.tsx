import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { PrimaryButton } from "../components"
import { Button } from 'react-native-paper'

export const CounterScreen = () => {

    const [count, setCount] = useState(10)

    return (
        <View style={styles.container} >
            <Text style={styles.title} >{count}</Text>

            {/* <PrimaryButton
                label='Aumentar'
                onPress={ () => setCount(count + 1) }
                onLongPress={ () => setCount(0) }
            /> */}
            <Button
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}
                mode="contained"
            >
                Aumentar
            </Button>

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


})