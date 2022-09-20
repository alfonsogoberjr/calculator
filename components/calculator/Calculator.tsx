import { FunctionComponent, useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { CalculatorScreen } from "./CalculatorScreen";
import { CalculatorButtons } from "./CalculatorButtons";
import { white } from "@components/colors";
import { useCalculator } from "@components/hooks";

export const Calculator: FunctionComponent = () => {
  const { input, pushInput, ...calculatorProps } = useCalculator();

  return (
    <Container>
      <CalculatorScreen value={input} pushInput={pushInput} />
      <CalculatorButtons pushInput={pushInput} {...calculatorProps} />
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  padding-right: 7px;
  background: ${white};
  display: flex;
  flex-direction: column;
`;
