import { useCallback, useEffect, useState, MouseEventHandler } from 'react';
import {
  reduce,
  add,
  subtract,
  multiply,
  divide,
  concat
} from 'ramda'

export enum Operations {
  ADD = "add",
  SUBTRACT = "subtract",
  MULTIPLY = "multiply",
  DIVIDE = "divide"
}

export const useCalculator = () => {
  const [action, setAction] = useState<Operations | null>();
  const [input, setInput] = useState<string>('');
  const [inputs, setInputs] = useState<string[]>([]);
  const [result, setResult] = useState<number>(0);

  const computeFns = {
    addAction: useCallback((value: number) => add(result, value), [result]),
    subtractAction: useCallback((value: number) => subtract(result, value), [result]),
    multiplyAction: useCallback((value: number) => multiply(result, value), [result]),
    divideAction: useCallback((value: number) => divide(result, value), [result])
  }

  const pushAction = useCallback((value: Operations) => {
    if (!action) {
      setAction(value)
      setInputs([input])
      setResult(Number(input))
    } else {
      compute()
    }
  }, [input, inputs, action])

  const pushInput = useCallback((value: string) => {
    if (!!action) setInput(value)
    else setInput(concat(input, value))
  }, [action, input])

  const clearInput: MouseEventHandler = () => {
    setInput('')
    setInputs([])
    setAction(null)
    setResult(0)
  }

  const compute = useCallback(() => {
    if (inputs.length === 1 && !!action) {
      const res = computeFns[`${action}Action`](Number(input))
      console.log(input, inputs, action, res)
      setResult(res)
      setInput(String(res))
      setInputs([res])
      setAction(null)
    }
  }, [inputs, input, action])

  return {
    pushAction,
    pushInput,
    input,
    clearInput,
    compute
  }
}