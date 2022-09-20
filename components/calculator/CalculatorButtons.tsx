import { FunctionComponent, MouseEventHandler } from "react";
import styled from "@emotion/styled";
import { grey, blue } from "../colors";
import { Button, ButtonTypeMap } from "@mui/material";

export type ButtonsProps = {
  pushAction: Function;
  pushInput: Function;
  compute: MouseEventHandler;
  clearInput: MouseEventHandler;
};

const globalButtonProps: ButtonTypeMap<{}, "button"> = ({
  sx: { margin: 0.5 },
  variant: "contained",
  color: "info",
  disableElevation: true,
  href: "#"
} as unknown) as ButtonTypeMap<{}, "button">;

export const CalculatorButtons: FunctionComponent<ButtonsProps> = ({
  pushInput,
  pushAction,
  compute,
  clearInput
}) => (
  <Container>
    {[...Array(10)]
      .map((value, index) => (index < 9 ? index + 1 : 0))
      .map((value, index) => (
        <Button
          key={index}
          {...globalButtonProps}
          onClick={() => pushInput(String(value))}
          onKeyDown={e => pushInput(e.key as string)}
        >
          {value}
        </Button>
      ))}
    <Button {...globalButtonProps} onClick={() => pushInput(".")}>
      .
    </Button>
    <Button {...globalButtonProps} onClick={() => pushInput("-")}>
      -
    </Button>

    <br />
    <Button
      {...{ ...globalButtonProps, color: "secondary" }}
      onClick={() => pushAction("add")}
    >
      +
    </Button>

    <Button
      {...{ ...globalButtonProps, color: "secondary" }}
      onClick={() => pushAction("subtract")}
    >
      -
    </Button>

    <Button
      {...{ ...globalButtonProps, color: "secondary" }}
      onClick={() => pushAction("multiply")}
    >
      x
    </Button>

    <Button
      {...{ ...globalButtonProps, color: "secondary" }}
      onClick={() => pushAction("divide")}
    >
      ÷
    </Button>

    <Button
      {...{ ...globalButtonProps, color: "secondary" }}
      onClick={() => pushAction("modulo")}
    >
      %
    </Button>

    <Button
      {...{ ...globalButtonProps, color: "secondary" }}
      onClick={clearInput}
    >
      AC
    </Button>

    <Button {...{ ...globalButtonProps, color: "primary" }} onClick={compute}>
      =
    </Button>
  </Container>
);

const Container = styled.div`
  width: 98.5%;
  height: 200px;
  margin: auto;
  text-align: right;
`;
