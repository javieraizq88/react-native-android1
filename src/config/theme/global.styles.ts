import { Platform, StyleSheet } from "react-native";

// para la calculadora
export const colors = {
    darkGray: '#2D2D2D',
    lightGray: '#9B9B9B',
    orange: '#FF9427',
    textPrimary: 'white',
    textSecondary: '#666666',
    background: '#000000'
}
export const globalColors = {
    primary: '#7037eb',
    secondary: '#f72585',
    tertiary: '#3a0ca3',
    success: '#4cc9f0',
    warning: '#fca311',
    danger: '#e71d36',
    dark: '#22223b',

    background: '#fff',
}


export const globalStyles = StyleSheet.create({
    // calculadora: {    // background: {
    //     //     flex: 1,
    //     //     backgroundColor: colors.background
    //     // },
    //     // calculatorContainer: {
    //     //     flex: 1,
    //     //     padding: 20,
    //     //     justifyContent: 'flex-end'
    //     // },
    //     // container: {
    //     //     backgroundColor: '#ffffff',
    //     //     flex: 1
    //     // },
    //     // title: {
    //     //     fontSize: 30,
    //     //     borderWidth: 10,
    //     // },
    //     // fab: {
    //     //     position: 'absolute',
    //     //     margin: 16,
    //     //     top: Platform.OS === 'android' ? 45 : 55,
    //     // },
    //     // row: {
    //     //     flexDirection: 'row',
    //     //     justifyContent: 'center',
    //     //     marginBottom: 18,
    //     //     paddingHorizontal: 10
    //     // },
    //     // button: {
    //     //     height: 80,
    //     //     width: 80,
    //     //     backgroundColor: colors.darkGray ,
    //     //     borderRadius: 100,
    //     //     justifyContent: 'center',
    //     //     marginHorizontal: 10,
    //     // },

    //     // mainResult: {
    //     //     color: colors.textPrimary,
    //     //     fontSize: 70,
    //     //     textAlign: 'right',
    //     //     marginBottom: 10,
    //     //     fontWeight: '400'
    //     // },
    //     // subResult: {
    //     //     color: colors.textSecondary,
    //     //     fontSize: 40,
    //     //     textAlign: 'right',
    //     //     fontWeight: '300'
    //     // },
    //     // buttonText: {
    //     //     textAlign: 'center',
    //     //     padding: 10,
    //     //     fontSize: 30,
    //     //     color: 'white',
    //     //     fontWeight: '300',

    //     // })
    // },

    container: {
        flex: 1,
        padding: 30,
        backgroundColor: globalColors.background
    },

    primaryButton: {
        backgroundColor: globalColors.primary,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center'
    },

    buttonText: {
        color: globalColors.background,
        fontSize: 18
    }

})