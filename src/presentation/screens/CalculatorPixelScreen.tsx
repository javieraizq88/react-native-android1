import { Pressable, Text } from "react-native"
import { View } from "react-native"
import { colors, globalStyles } from "../../config/theme/global.styles"
import { CalculatorButton } from "../components/CalculatorButton"
import { useCalculatorPixel } from "../hooks/useCalculatorPixel"

export const CalculatorPixelScreen = () => {

    const {
        formula, number, prevNumber, buildNumber, toggleSign,
        clean, deleteOperation,
        sumarOperation, restarOperation, dividirOperation, multiplicarrOperation,
        calcularResultado,
    } = useCalculatorPixel();

    return (
        <View style={globalStyles.calculatorContainer} >

            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }} >
                <Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={globalStyles.mainResult} >
                    {formula}
                </Text>

                {/* TODO si el valor de la formula es igual a prevNumber, no muestra nada */}
                {
                    (formula === prevNumber)
                        ? <Text style={globalStyles.subResult} > </Text>
                        : <Text
                            adjustsFontSizeToFit
                            numberOfLines={1}
                            style={globalStyles.subResult} >
                            {(prevNumber === '0') ? '0' : prevNumber}
                        </Text>
                }
            </View>

            <View style={globalStyles.row} >
                <CalculatorButton onPress={() => clean()} blackText label="C" color={colors.lightGray} />
                <CalculatorButton onPress={() => toggleSign()} blackText label="+/-" color={colors.lightGray} />
                <CalculatorButton onPress={() => deleteOperation()} blackText label="del" color={colors.lightGray} />
                <CalculatorButton onPress={() => dividirOperation()} label="/" color={colors.orange} />
            </View>

            <View style={globalStyles.row} >
                <CalculatorButton onPress={() => buildNumber('7')} label="7" />
                <CalculatorButton onPress={() => buildNumber('8')} label="8" />
                <CalculatorButton onPress={() => buildNumber('9')} label="9" />
                <CalculatorButton onPress={() => multiplicarrOperation()} label="X" color={colors.orange} />
            </View>

            <View style={globalStyles.row} >
                <CalculatorButton onPress={() => buildNumber('4')} label="4" />
                <CalculatorButton onPress={() => buildNumber('5')} label="5" />
                <CalculatorButton onPress={() => buildNumber('6')} label="6" />
                <CalculatorButton onPress={() => restarOperation()} label="-" color={colors.orange} />
            </View>

            <View style={globalStyles.row} >
                <CalculatorButton onPress={() => buildNumber('1')} label="1" />
                <CalculatorButton onPress={() => buildNumber('2')} label="2" />
                <CalculatorButton onPress={() => buildNumber('3')} label="3" />
                <CalculatorButton onPress={() => sumarOperation()} label="+" color={colors.orange} />
            </View>

            <View style={globalStyles.row} >
                <CalculatorButton onPress={() => buildNumber('0')} label="0" dobleSize />
                <CalculatorButton onPress={() => buildNumber('.')} label="." />
                <CalculatorButton onPress={() => calcularResultado()} label="=" color={colors.orange} />
            </View>

        </View>
    )
}