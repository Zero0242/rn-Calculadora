import { useRef, useState } from 'react'

enum Operation {
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
        if (counter === '0') {
            if (text === '.') setCounter('0.')
            else setCounter(text)
            return
        }
        setCounter(cur => cur + text)
    }

    function clear() {
        setCounter('0')
        setPreviousCounter('0')
    }


    return {
        // * Props
        counter,
        previousCounter,
        // * Methods
        buildNumber,
        clear,

    }
}
