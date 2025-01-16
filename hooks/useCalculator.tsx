import { useEffect, useRef, useState } from 'react'

export enum Operation {
    addition = '+',
    substraction = '-',
    multiplication = 'x',
    divition = '/',
}

export const useCalculator = () => {
    const [formula, setFormula] = useState('')
    const [counter, setCounter] = useState('0')
    const [previousCounter, setPreviousCounter] = useState('0')
    const operationRef = useRef<Operation>()

    useEffect(() => {
        if (operationRef.current) {
            setFormula(`${previousCounter} ${operationRef.current} ${counter}`)
        } else {
            setFormula(counter)
        }
    }, [counter])



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
        operationRef.current = undefined
        setCounter('0')
        setPreviousCounter('0')

    }

    function removeChar() {
        const num = Math.abs(parseFloat(counter))
        if (num < 10) {
            // * Todo decimal menor a [-10 , 10]  era retornado automaticamente al 0
            // * por eso si existe una parte decimal en el numero, realizar la valicacion
            const [numberPart, decimalPart] = counter.split('.')
            if (decimalPart) {
                const newValue = numberPart + '.' + decimalPart.slice(0, -1)
                return setCounter(parseFloat(newValue).toString())
            }
            return setCounter('0')
        }
        setCounter(cur => cur.slice(0, -1))
    }

    function setOperator(operation: Operation) {
        operationRef.current = operation
        setPreviousCounter(parseFloat(counter).toString())
        setCounter('0')
    }

    function toggleValue() {
        let reference: number = parseFloat(counter)
        reference = reference * -1
        setCounter(reference.toString())
    }

    function equalOperator() {
        const result = _calculateValue()
        operationRef.current = undefined
        setCounter(result.toString())
        setPreviousCounter('0')
    }

    function _calculateValue(): number {
        const num1: number = parseFloat(counter)
        const num2: number = parseFloat(previousCounter)
        switch (operationRef.current) {
            case Operation.addition:
                return num2 + num1
            case Operation.substraction:
                return num2 - num1
            case Operation.multiplication:
                return num2 * num1
            case Operation.divition:
                if (num1 === 0) return 0;
                return num2 / num1
            default:
                return 0
        }
    }


    return {
        // * Props
        formula,
        previousCounter,
        // * Methods
        buildNumber,
        setOperator,
        clear,
        toggleValue,
        removeChar,
        equalOperator,
    }
}
