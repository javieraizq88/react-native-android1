import { useState } from "react"

export const useCalculator = () => {

    const [number, setNumbwer] = useState('0');

    const clean = () => {

    }

    // borra ultimo numero marcado
    const deleteOperation = () => {

    }

    const toggleSign = () => {
        // si el numero viene con el -, se reemplaza por un string vacio
        if (number.includes('-')) {
            return setNumbwer(number.replace('-', ''))
        }
        // sino, se deja con el - y se agrega en numero
        setNumbwer('-' + number);
    }


    const buildNumber = (numberString: string) => {

        // solo se peude agregar un .
        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            // al tocar el . antes de cualquier otro numero, lo agrega despues del 0 que es el state '0'
            if (numberString === '.') {
                return setNumbwer(number + numberString);
            }

            // si hay otro 0 y no hay .
            if (numberString === '0' && number.includes('.')) {
                return setNumbwer(number + numberString);
            }

            // si es diferente de 0, no hay . y es el primer numero
            if (numberString !== '0' && !number.includes('.')) {
                return setNumbwer(numberString);
            }

            // evitar el 000.000
            if (numberString === '0' && !number.includes('.')) {
                return;
            }

            return setNumbwer(number + numberString);
        }

        setNumbwer(number + numberString);
    }

    return {
        // Properties
        number,



        //methods
        buildNumber,
        toggleSign,
    }
}