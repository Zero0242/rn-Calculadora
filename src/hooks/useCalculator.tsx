import {useRef, useState} from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}
const useCalculator = () => {
  const [lastnumber, setLastnumber] = useState('0');
  const [resultado, setResultado] = useState('100');

  const ultimaOperacion = useRef<Operadores>();

  const clear = () => {
    setResultado('0');
    setLastnumber('0');
  };

  const positivoNegativo = () => {
    if (resultado.includes('-')) {
      setResultado(resultado.replace('-', ''));
    } else {
      setResultado('-' + resultado);
    }
  };

  const removeLast = () => {
    const data = resultado.slice(0, -1);
    if (!data || data === '-') {
      setResultado('0');
    } else {
      setResultado(data);
    }
  };

  const setNewLine = () => {
    if (resultado.endsWith('.')) {
      setLastnumber(resultado.slice(0, -1));
    } else {
      setLastnumber(resultado);
    }

    setResultado('0');
  };

  const btnAdd = () => {
    setNewLine();
    ultimaOperacion.current = Operadores.sumar;
  };
  const btnSubstract = () => {
    setNewLine();
    ultimaOperacion.current = Operadores.restar;
  };
  const btnMulti = () => {
    setNewLine();
    ultimaOperacion.current = Operadores.multiplicar;
  };
  const btnDivide = () => {
    setNewLine();
    ultimaOperacion.current = Operadores.dividir;
  };

  const armarNumero = (numeroText: string) => {
    if (resultado.includes('.') && numeroText === '.') return;
    if (resultado.startsWith('0') || resultado.startsWith('-0')) {
      if (numeroText === '.') {
        setResultado(resultado + numeroText);
      } else if (numeroText === '0' && resultado.includes('.')) {
        setResultado(resultado + numeroText);
      } else if (numeroText !== '0' && !resultado.includes('.')) {
        setResultado(numeroText);
      } else if (numeroText !== '0' && !resultado.includes('.')) {
        setResultado(numeroText);
      } else if (numeroText === '0' && !resultado.includes('.')) {
        setResultado(resultado);
      } else {
        setResultado(resultado + numeroText);
      }
    } else {
      setResultado(resultado + numeroText);
    }
  };

  const calcular = () => {
    const num1 = Number(resultado);
    const num2 = Number(lastnumber);

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setResultado((num1 + num2).toString());
        break;
      case Operadores.restar:
        setResultado((num2 - num1).toString());
        break;
      case Operadores.dividir:
        setResultado((num2 / num1).toString());
        break;
      case Operadores.multiplicar:
        setResultado((num1 * num2).toString());
        break;
    }

    setLastnumber('0');
  };

  return {
    armarNumero,
    btnAdd,
    btnDivide,
    btnMulti,
    btnSubstract,
    lastnumber,
    resultado,
    clear,
    calcular,
    removeLast,
    positivoNegativo,
  };
};

export default useCalculator;
