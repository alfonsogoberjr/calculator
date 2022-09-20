import { FunctionComponent, useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { CalculatorScreen } from "./CalculatorScreen"
import { CalculatorButtons } from "./CalculatorButtons"
import { white } from "@components/colors";
import { useCalculator } from "@components/hooks";

export const Calculator: FunctionComponent = () => {
  const { input, ...calculatorProps } = useCalculator();

  return (<Container>
    <CalculatorScreen value={input} />
    <CalculatorButtons {...calculatorProps} />
  </Container>)
}

const Container = styled.div`
  width: 280px;
  background: ${white};
  display: flex;
  flex-direction: column;
`;