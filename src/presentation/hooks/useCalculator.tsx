import {useRef, useState} from 'react';

export enum Operator {
  add,
  substract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [counter, setCounter] = useState('0');
  const [previousCounter, setPreviousCounter] = useState('0');
  const lastOperation = useRef<Operator>(Operator.add);

  const buildNumber = (numberText: string) => {
    if (counter.includes('.') && numberText === '.') {
      return;
    }

    if (counter.startsWith('0') || counter.startsWith('-0')) {
      // * Para añadir el decimal
      if (numberText === '.') {
        return setCounter(counter + numberText);
      }
      // * Para evaluar si es otro 0 y sin punto
      if (numberText === '0' && counter.includes('.')) {
        return setCounter(counter + numberText);
      }
      // * Evaluar si es diferente a 0 y es el primer numero
      if (numberText !== '0' && !counter.includes('.')) {
        return setCounter(numberText);
      }
      // * Evitar el 00000
      if (numberText === '0' && !counter.includes('.')) {
        return;
      }
      return setCounter(counter + numberText);
    }
    setCounter(counter + numberText);
  };

  const deleteOperation = () => {
    const numberRef: number = Math.abs(parseFloat(counter));
    if (numberRef < 10) {
      return setCounter('0');
    }

    const result = counter.slice(0, -1);

    setCounter(result);
  };

  const toggleSign = () => {
    let value: number = parseFloat(counter);
    value = value * -1;
    setCounter(value.toString());
  };

  const reset = () => {
    setCounter('0');
    setPreviousCounter('0');
  };

  const setLastNumber = () => {
    if (counter.endsWith('.')) {
      setPreviousCounter(counter.slice(0, -1));
    } else {
      setPreviousCounter(counter);
    }
    setCounter('0');
  };

  const setOperation = (operator: Operator) => {
    setLastNumber();
    lastOperation.current = operator;
  };

  const setResult = () => {
    let result: number = _calculateValue();
    setCounter(`${result}`);
    setPreviousCounter('0');
  };

  const _calculateValue = (): number => {
    let num1: number = Number(counter);
    let num2: number = Number(previousCounter);
    switch (lastOperation.current) {
      case Operator.add:
        return num1 + num2;
      case Operator.divide:
        if (num1 === 0) {
          return 0;
        }
        return num2 / num1;
      case Operator.multiply:
        return num1 * num2;
      case Operator.substract:
        return num2 - num1;
      default:
        throw new Error('Estas cometiendo pecados contra la naturaleza');
    }
  };

  return {
    // * props
    counter,
    previousCounter,
    // * methods
    buildNumber,
    reset,
    deleteOperation,
    toggleSign,
    setOperation,
    setResult,
  };
};
