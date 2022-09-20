import { FunctionComponent, useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { CalculatorScreen } from "./CalculatorScreen";
import { CalculatorButtons } from "./CalculatorButtons";
import { black, blue, white } from "@components/colors";
import { useCalculator } from "@components/hooks";
import { Typography } from "@mui/material";
import GithubIcon from "../media/GithubIcon";

export const Calculator: FunctionComponent = () => {
  const { input, pushInput, ...calculatorProps } = useCalculator();

  return (
    <Container>
      <Typography sx={{ marginBottom: 2, color: black }} variant="h3">
        Calculator
      </Typography>
      <Typography sx={{ marginBottom: 2, color: black }}>
        &nbsp;by{" "}
        <a
          href="https://github.com/alfonsogoberjr"
          target={"_blank"}
          style={{ color: blue, textDecoration: "none", marginBottom: 2 }}
        >
          <GithubIcon style={{ marginTop: 1 }} />
          &nbsp;alfonsogoberjr
        </a>
      </Typography>
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
