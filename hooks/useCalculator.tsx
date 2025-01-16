import { useRef, useState } from 'react'

export enum Operation {
    addition = '+',
    substraction = '-',
    multiplication = 'x',
    divition = '/',
}

export const useCalculator = () => {
    const [counter, setCounter] = useState('0')
    const [previousCounter, setPreviousCounter] = useState('0')
    const operationRef = useRef<Operation>()


    function buildNumber(text: string) {
        // * No agregar más puntos ni 0s innecesarios
        if (text === '.' && counter.includes('.')) return
        if (['0', '-0'].includes(counter)) {
            if (text === '.') setCounter(cur => cur + text)
            else setCounter(text)
            return
        }
        setCounter(cur => cur + text)
    }

    function clear() {
        setCounter('0')
        setPreviousCounter('0')
    }

    function removeChar() {
        const num = Math.abs(parseFloat(counter))
        if (num < 10) {
            return setCounter('0')
        }
        setCounter(cur => cur.slice(0, -1))
    }

    function setOperator(operation: Operation) {
        operationRef.current = operation
        console.log({ operation });
        setPreviousCounter(parseFloat(counter).toString())
        setCounter('0')
    }

    function toggleValue() {
        let reference: number = parseFloat(counter)
        reference = reference * -1
        setCounter(reference.toString())
    }


    return {
        // * Props
        counter,
        previousCounter,
        // * Methods
        buildNumber,
        setOperator,
        clear,
        toggleValue,
        removeChar,

    }
}
