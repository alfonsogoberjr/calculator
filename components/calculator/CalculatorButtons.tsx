import { FunctionComponent, MouseEventHandler } from "react";
import styled from "@emotion/styled";
import { grey, blue } from "../colors";
import { Button } from "@mui/material";

export type ButtonsProps = {
  pushAction: Function;
  pushInput: Function;
  compute: MouseEventHandler;
  clearInput: MouseEventHandler;
};

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
          sx={{ margin: 0.5 }}
          variant="contained"
          color="info"
          disableElevation
          onClick={() => pushInput(String(value))}
          onKeyDown={e => pushInput(e.key as string)}
          href="#"
        >
          {value}
        </Button>
      ))}
    <Button
      sx={{ margin: 0.5 }}
      variant="contained"
      color="info"
      disableElevation
      onClick={() => pushInput(".")}
      href="#"
    >
      .
    </Button>
    <Button
      sx={{ margin: 0.5 }}
      variant="contained"
      color="info"
      disableElevation
      onClick={() => pushInput("-")}
      href="#"
    >
      -
    </Button>

    <br />
    <Button
      sx={{ margin: 0.5 }}
      variant="contained"
      color="secondary"
      disableElevation
      onClick={() => pushAction("add")}
      href="#"
    >
      +
    </Button>

    <Button
      sx={{ margin: 0.5 }}
      variant="contained"
      color="secondary"
      disableElevation
      onClick={() => pushAction("subtract")}
      href="#"
    >
      -
    </Button>

    <Button
      sx={{ margin: 0.5 }}
      variant="contained"
      color="secondary"
      disableElevation
      onClick={() => pushAction("multiply")}
      href="#"
    >
      x
    </Button>

    <Button
      sx={{ margin: 0.5 }}
      variant="contained"
      color="secondary"
      disableElevation
      onClick={() => pushAction("divide")}
      href="#"
    >
      ÷
    </Button>

    <Button
      sx={{ margin: 0.5 }}
      variant="contained"
      color="secondary"
      disableElevation
      onClick={() => pushAction("modulo")}
      href="#"
    >
      %
    </Button>

    <Button
      sx={{ margin: 0.5 }}
      variant="contained"
      color="secondary"
      disableElevation
      onClick={clearInput}
      href="#"
    >
      AC
    </Button>

    <Button
      sx={{ margin: 0.5 }}
      variant="contained"
      color="primary"
      disableElevation
      onClick={compute}
      href="#"
    >
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
