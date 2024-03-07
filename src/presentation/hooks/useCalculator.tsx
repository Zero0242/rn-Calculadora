import {useState} from 'react';

export const useCalculator = () => {
  const [counter, setCounter] = useState('0');

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

  const reset = () => setCounter('0');

  return {
    // * props
    counter,
    // * methods
    buildNumber,
    reset,
    deleteOperation,
    toggleSign,
  };
};
