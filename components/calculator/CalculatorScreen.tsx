import { FunctionComponent, useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { grey, blue } from "../colors";

export type CalculatorScreenProps = {
  value: string;
}

export const CalculatorScreen: FunctionComponent<CalculatorScreenProps> = ({ value }) => (<Container>{value}</Container>)

const Container = styled.div`
  width: 98.5%;
  height: 72px;
  border: 1px solid ${blue};
  border-radius: 8px;
  margin: auto;
  padding: 10px 14px 0 10px;
  margin-bottom: 10px;
  text-align: right;
  box-sizing: border-box;
  box-shadow: inset 0 1px 2px rgb(0 0 0 / 30%);
`;