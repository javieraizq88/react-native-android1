import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { PrimaryButton } from "../components"
import { Button } from 'react-native-paper'
import { globalStyles } from "../theme/global.styles"
import { FAB } from 'react-native-paper'

interface Props {
    label: string,
    onPress?: () => void,
    onLongPress?: () => void,
}


export const CounterM3Screen = ({ label, onLongPress, onPress }: Props) => {

    const [count, setCount] = useState(10)

    return (
        <View style={globalStyles.container} >
            <Text style={globalStyles.title} >{count}</Text>
            <FAB
                label="=1"
                style={globalStyles.fab}
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}
            />
        </View>
    )
}


