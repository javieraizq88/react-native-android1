import { useEffect, useRef, useState } from "react"

enum Operator {
    sumar = '+',
    restar = '-',
    multiplicar = 'x',
    dividir = '/',
}

export const useCalculatorPixel = () => {

    const [formula, setFormula] = useState('');

    const [number, setNumbwer] = useState('0');
    const [prevNumber, setPrevNumbwer] = useState('0');

    const lasOperation = useRef<Operator>();


    useEffect(() => {
        // si el ultimo valor es diferente de Undefine
        if (lasOperation.current) {
            const firstFormulaPart = formula.split(' ').at(0); // TODO pone en vacio la primera posicion del numero 
            setFormula(`${firstFormulaPart} ${lasOperation.current} ${number}`)  // TODO toma el simbolo del numero, contatena con la operacion matematica y da el nuevo numero
        } else {
            setFormula(number);
        }
    }, [number]);



    useEffect(() => {
        const subResult = calcularSubResultado();
        setPrevNumbwer(`${subResult}`);
    }, [formula]);




    const clean = () => {
        setNumbwer('0');
        setPrevNumbwer('0');
        lasOperation.current = undefined;
        setFormula('')
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
       calcularResultado(); // calcula el valor en mas de una operacion matematica
       
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

        const result = calcularSubResultado(); // TODO devuelve la operacion matematica basa en la formula
        setFormula(`${result}`);


        lasOperation.current = undefined;
        setPrevNumbwer('0') //TODO  deja en 0 el resultado final 
    }

    const calcularSubResultado = (): number => {

        // TODO forma un arreglo de cada numero separado con un ' '
        const [primerValor, operacion, segundoValor] = formula.split(' ');

        const num1 = Number(primerValor);
        const num2 = Number(segundoValor);

        // si se agrega un numero y depsues el =, muestra el num1
        if (isNaN(num2)) return num1;

        switch (operacion) {
            case Operator.sumar:
                return num1 + num2;
            case Operator.restar:
                return num1 - num2;
            case Operator.dividir:
                return num1 / num2;
            case Operator.multiplicar:
                return num1 * num2;
            default:
                throw new Error('Operacion no valida')
        }

    }

    return {
        // Properties
        number,
        prevNumber,
        formula,


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