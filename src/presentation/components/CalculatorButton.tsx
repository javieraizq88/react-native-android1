import { Pressable, Text, View } from "react-native"
import { colors, globalStyles } from "../../config/theme/global.styles"

interface Props {
    label: string,
    color?: string,
    dobleSize?: boolean,
    blackText?: boolean,
}


export const CalculatorButton = ({
    label,
    color = colors.darkGray,
    dobleSize= false,
    blackText= false,
}: Props) => {
    return (
        <Pressable style={({ pressed }) => ({
            ...globalStyles.button,
            backgroundColor: color,

            width: (dobleSize) ? 180 : 80,
            opacity: (pressed) ? 0.8 : 1
        })} >
            <Text style={{ 
                   ...globalStyles.buttonText,
                   color: (blackText) ? 'black' : 'white',
            }}> {label} </Text>
        </Pressable>
    )
}