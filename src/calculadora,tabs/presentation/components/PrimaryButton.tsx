import { useState } from "react"
import { Platform, Pressable, StyleSheet, Text, View } from "react-native"
import { globalStyles } from "../../theme/global.styles"
import { useNavigation } from "@react-navigation/native";


interface Props {
    label: string,
    onPress: () => void,
}


export const PrimaryButton = ({ label, onPress }: Props) => {

    return (
        // counter
        // <Pressable
        //     onPress={() => onPress && onPress()}
        //     onLongPress={() => onLongPress && onLongPress()}
        //     style={({ pressed }) => [
        //         styles.button,
        //         pressed && styles.buttonPressed
        //     ]}
        // >
        //     <Text style={{
        //         color: Platform.OS === 'android' ? 'white' : '#4746AB'
        //     }} > {label} </Text>
        // </Pressable>

        <Pressable
            onPress={() => onPress()}
            style={globalStyles.primaryButton} >
            <Text style={globalStyles.buttonText}>
                {label}
            </Text>
        </Pressable>
    )
}


// const styles = StyleSheet.create({
//     button: {
//         backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
//         paddingHorizontal: 20,
//         paddingVertical: 10,
//         borderRadius: 10
//     },
//     buttonPressed: {
//         backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white'
//     }

// })