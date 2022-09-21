import { useEffect, useCallback, useState, MouseEventHandler } from "react";
import { pipe, split, filter, add, subtract, multiply, divide, modulo, concat } from "ramda";
import isNumber from "is-number";

export enum Operations {
  ADD = "add",
  SUBTRACT = "subtract",
  MULTIPLY = "multiply",
  DIVIDE = "divide",
  MODULO = "modulo"
}

const Symbols = {
  add: "+",
  subtract: "-",
  multiply: "x",
  divide: "/",
  modulo: "%"
};

export const useCalculator = () => {
  const [action, setAction] = useState<Operations | null>();
  const [input, setInput] = useState<string>("");
  const [inputs, setInputs] = useState<string[]>([]);
  const [result, setResult] = useState<number>(0);

  const computeFns = {
    addAction: useCallback((value: number) => add(result, value), [result]),
    subtractAction: useCallback((value: number) => subtract(result, value), [
      result
    ]),
    multiplyAction: useCallback((value: number) => multiply(result, value), [
      result
    ]),
    divideAction: useCallback((value: number) => divide(result, value), [
      result
    ]),
    moduloAction: useCallback((value: number) => modulo(result, value), [
      result
    ])
  };

  useEffect(() => {
    if (/\s/.test(input)) {
      console.log(pipe(split(' '), filter(isNumber))(input))
      setInputs(pipe(split(' '), filter(isNumber))(input))
    }
  }, [input])

  const validateKeyPress = (key: string) => /^(\+|-|\/|\*|x|%|\.|Enter|=|Backspace)$/.test(key)

  const pushAction = useCallback(
    (value: Operations) => {
      if (!action) {
        setAction(value);
        setResult(Number(input));
        setInput(`${input} ${Symbols[value]} `);
      } else {
        compute();
        setAction(value);
      }
    },
    [input, inputs, action]
  );

  const pushInput = useCallback(
    (value: string) => {
      if (value === '+') {
        pushAction(Operations.ADD)
      } else if (value === '-') {
        pushAction(Operations.SUBTRACT)
      } else if (value === '*') {
        pushAction(Operations.MULTIPLY)
      } else if (value === 'x') {
        pushAction(Operations.MULTIPLY)
      } else if (value === '/') {
        pushAction(Operations.DIVIDE)
      } else if (value === '%') {
        pushAction(Operations.MODULO)
      } else if (value === 'Enter') {
        compute()
      } else if (value === '=') {
        compute()
      } else if (value === 'Backspace') {
        setInput(input.slice(0, -1))
      } else {
        setInput(concat(input, value));
        document.getElementById('screen').focus()
      } 
    },
    [action, input, inputs]
  );

  const clearInput: MouseEventHandler = () => {
    setInput("");
    setInputs([]);
    setAction(null);
    setResult(0);
  };

  const compute = useCallback(() => {
    if (inputs.length === 2 && !!action) {
      const res = computeFns[`${action}Action`](Number(inputs[1]));
      console.log(inputs, input, action, res)
      setResult(res);
      setInput(String(res));
      setInputs([res]);
      setAction(null);
    }
  }, [inputs, input, action, result]);

  return {
    pushAction,
    pushInput,
    input,
    clearInput,
    compute,
    validateKeyPress
  };
};
