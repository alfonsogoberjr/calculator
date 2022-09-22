import { useEffect, useCallback, useState, MouseEventHandler } from "react";
import {
  pipe,
  split,
  filter,
  add,
  subtract,
  multiply,
  divide,
  modulo,
  concat,
  map
} from "ramda";
import isNumber from "is-number";

export enum Operations {
  ADD = "add",
  SUBTRACT = "subtract",
  MULTIPLY = "multiply",
  DIVIDE = "divide",
  MODULO = "modulo",
  EQUALS = "equals"
}

const Symbols = {
  add: "+",
  subtract: "-",
  multiply: "x",
  divide: "/",
  modulo: "%",
  equals: "="
};

export const useCalculator = () => {
  const [action, setAction] = useState<Operations | null>();
  const [input, setInput] = useState<string>("");
  const [inputs, setInputs] = useState<number[]>([]);
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
    if (/\s/.test(input)) setInputs(pipe(split(" "), filter(isNumber), map(Number))(input));
  }, [input]);

  useEffect(() => {
    if (action === Operations.EQUALS) compute()
    else compute(Symbols[action as string])
  }, [action])

  const validateKeyPress = (key: string) =>
    isNumber(key) || /^(\+|-|\/|\*|x|%|\.|Enter|=|Backspace)$/.test(key);

  const updateInput = useCallback((value: Operations) => {
    setInput(`${input} ${value} `);
    setResult(Number(input));
  }, [input])

  const pushInput = useCallback(
    (value: string) => {
      if (validateKeyPress(value)) {
        if (isNumber(value)) {
          setInput(concat(input, value));
          document.getElementById("screen").focus();
        } else {
          if (value === Symbols.add) {
            setAction(Operations.ADD);
            updateInput(value as Operations)
          } else if (value === Symbols.subtract) {
            setAction(Operations.SUBTRACT);
            updateInput(value as Operations)
          } else if ((value === Symbols.multiply) || (value === "*")) {
            setAction(Operations.MULTIPLY);
            updateInput(value as Operations)
          } else if (value === Symbols.divide) {
            setAction(Operations.DIVIDE);
            updateInput(value as Operations)
          } else if (value === Symbols.modulo) {
            setAction(Operations.MODULO);
            updateInput(value as Operations)
          } else if ((value === "Enter") || (value === Symbols.equals)) {
            setAction(Operations.EQUALS);
          } else if (value === "Backspace") {
            setInput(input.slice(0, -1));
          }
        }
      }
    },
    [input, inputs]
  );

  const clearInput: MouseEventHandler = () => {
    setInput("");
    setInputs([]);
    setAction(null);
    setResult(0);
  };

  const compute = useCallback((newAction?: Operations) => {
    if (inputs.length === 2 && !!action) {
      const res: number = computeFns[`${action}Action`](Number(inputs[1]));
      console.log(res)
      setResult(res);
      setInput(newAction ? `${String(res)} ${newAction} ` : String(res));
      setInputs([res]);
      setAction(null);
    }
  }, [input, inputs, action, result]);

  return {
    pushInput,
    input,
    clearInput,
    compute,
    validateKeyPress
  };
};
