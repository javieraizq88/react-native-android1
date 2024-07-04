import { useRef, useState } from "react"

enum Operator {
    sumar,
    restar,
    multiplicar,
    dividir,
}


export const useCalculator = () => {

    const [number, setNumbwer] = useState('0');
    const [prevNumber, setPrevNumbwer] = useState('0');

    const lasOperation = useRef<Operator>();


    const clean = () => {
        setNumbwer('0');
        setPrevNumbwer('0');
    }

    // borra ultimo numero marcado
    const deleteOperation = () => {
        let currentSign = '';
        let temporalNumber = number;

        // cambia el signo del numero a positivo si viene con -
        if (number.includes('-')) {
            currentSign = '-';
            temporalNumber = number.replace('-', '') // -88 -> 88
        }

        // elimina el ultimo dato y mantiene el - o ''
        if (temporalNumber.length > 1) {
            return setNumbwer(currentSign + temporalNumber.slice(0, -1))
        }

        setNumbwer('0')
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

    // si se pone 0. y se selecciona cualquier operacion matematica, borra el .
    const setLastNumber = () => {
        // si termina con un punto, borra la ultima posicion
        if (number.endsWith('.')) {
            setPrevNumbwer(number.slice(0, -1));
        } else {
            setPrevNumbwer(number);
        }

        setNumbwer('0');
    }

    const sumarOperation = () => {
        setLastNumber();
        lasOperation.current = Operator.sumar;
    }
    const restarOperation = () => {
        setLastNumber();
        lasOperation.current = Operator.restar;
    }
    const multiplicarrOperation = () => {
        setLastNumber();
        lasOperation.current = Operator.multiplicar;
    }
    const dividirOperation = () => {
        setLastNumber();
        lasOperation.current = Operator.dividir;
    }

    const calcularResultado = () => {

        // transformar el string a numero
        const num1 = Number(number);
        const num2 = Number(prevNumber);


        switch (lasOperation.current) {
            case Operator.sumar:
                setNumbwer(`${num1 + num2}`);
                break;
            case Operator.restar:
                setNumbwer(`${num2 - num1}`);
                break;
            case Operator.dividir:
                setNumbwer(`${num2 / num1}`);
                break;
            case Operator.multiplicar:
                setNumbwer(`${num1 * num2}`);
                break;
            default:
                throw new Error('Operacion no valida')
        }

        //deja en 0 el prevNumber 
        setPrevNumbwer('0')

    }


    return {
        // Properties
        number,
        prevNumber,



        //methods
        buildNumber,
        clean,
        deleteOperation,
        toggleSign,
        sumarOperation,
        restarOperation,
        dividirOperation,
        multiplicarrOperation,
        calcularResultado,
    }
}