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
  MODULO = "modulo"
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
  const [negModifier, setNegModifier] = useState<boolean>(false);

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
    if (input) console.log('input', input)
    if (/\s/.test(input)) setInputs(pipe(split(" "), filter(isNumber), map(Number))(input));
  }, [input]);

  useEffect(() => {
    if (inputs) console.log('inputs', inputs)
  }, [inputs]);

  const validateKeyPress = (key: string) =>
    isNumber(key) || /^(\+|-|\/|\*|x|%|\.|Enter|=|Backspace)$/.test(key);

  const pushAction = useCallback(
    (value: Operations) => {
      if (inputs.length === 2 && !!action) {
        compute();
      } else if (value === Operations.SUBTRACT && (!!action || !inputs.length) && !negModifier) {
        setNegModifier(true);
        setInput(`${input} ${Symbols[value]}`);
      } else if (input.length) {
        setResult(Number(input));
        setInput(`${input} ${Symbols[value]} `);
        setAction(value);
      }
    },
    [input, inputs, action, result, negModifier]
  );

  const pushInput = useCallback(
    (value: string) => {
      if (validateKeyPress(value)) {
        if (isNumber(value)) {
          setInput(concat(input, value));
          document.getElementById("screen").focus();
        } else if (value === Symbols.add) {
          pushAction(Operations.ADD);
        } else if (value === Symbols.subtract) {
          pushAction(Operations.SUBTRACT);
        } else if (value === Symbols.multiply || value === "*") {
          pushAction(Operations.MULTIPLY);
        } else if (value === Symbols.divide) {
          pushAction(Operations.DIVIDE);
        } else if (value === Symbols.modulo) {
          pushAction(Operations.MODULO);
        } else if (value === "Enter") {
          compute();
        } else if (value === Symbols.equals) {
          compute();
        } else if (value === "Backspace") {
          setInput(input.slice(0, -1));
        }
      }
    },
    [input, inputs, action]
  );

  const clearInput: MouseEventHandler = () => {
    setInput("");
    setInputs([]);
    setAction(null);
    setResult(0);
  };

  const compute = useCallback(() => {
    if (inputs.length === 2 && !!action) {
      const res: number = computeFns[`${action}Action`](Number(inputs[1]));
      setResult(res);
      setInput(String(res));
      setInputs([res]);
      setAction(null);
      setNegModifier(false);
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
