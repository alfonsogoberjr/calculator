import { FunctionComponent, useRef, useState, useEffect, MouseEventHandler } from "react";
import styled from "@emotion/styled";
import { grey, blue } from "../colors";
import { Button } from '@mui/material';

export type ButtonsProps = {
  pushAction: Function;
  pushInput: Function;
  compute: MouseEventHandler;
  clearInput: MouseEventHandler;
}

export const CalculatorButtons: FunctionComponent<ButtonsProps> = ({
  pushInput,
  pushAction,
  compute,
  clearInput
}) => (<Container>
  <Button sx={{ marginTop: 1 }} variant="contained" color="info" disableElevation onClick={() => pushInput('1')} href="#">
    1
  </Button>&nbsp;
  <Button sx={{ marginTop: 1 }} variant="contained" color="info" disableElevation onClick={() => pushInput('2')} href="#">
    2
  </Button>&nbsp;
  <Button sx={{ marginTop: 1 }} variant="contained" color="info" disableElevation onClick={() => pushInput('3')} href="#">
    3
  </Button>&nbsp;
  <Button sx={{ marginTop: 1 }} variant="contained" color="info" disableElevation onClick={() => pushInput('4')} href="#">
    4
  </Button>&nbsp;
  <Button sx={{ marginTop: 1 }} variant="contained" color="info" disableElevation onClick={() => pushInput('5')} href="#">
    5
  </Button>&nbsp;
  <Button sx={{ marginTop: 1 }} variant="contained" color="info" disableElevation onClick={() => pushInput('6')} href="#">
    6
  </Button>&nbsp;
  <Button sx={{ marginTop: 1 }} variant="contained" color="info" disableElevation onClick={() => pushInput('7')} href="#">
    7
  </Button>&nbsp;
  <Button sx={{ marginTop: 1 }} variant="contained" color="info" disableElevation onClick={() => pushInput('8')} href="#">
    8
  </Button>&nbsp;
  <Button sx={{ marginTop: 1 }} variant="contained" color="info" disableElevation onClick={() => pushInput('9')} href="#">
    9
  </Button>&nbsp;
  <Button sx={{ marginTop: 1 }} variant="contained" color="info" disableElevation onClick={() => pushInput('0')} href="#">
    0
  </Button>&nbsp;
  <Button sx={{ marginTop: 1 }} variant="contained" color="info" disableElevation onClick={() => pushInput('.')} href="#">
    .
  </Button>&nbsp;
  <br/>
  <Button sx={{ marginTop: 1 }} variant="contained" color="secondary" disableElevation onClick={() => pushAction('add')} href="#">
    +
  </Button>&nbsp;
  <Button sx={{ marginTop: 1 }} variant="contained" color="secondary" disableElevation onClick={() => pushAction('subtract')} href="#">
    -
  </Button>&nbsp;
  <Button sx={{ marginTop: 1 }} variant="contained" color="secondary" disableElevation onClick={() => pushAction('multiply')} href="#">
    x
  </Button>&nbsp;
  <Button sx={{ marginTop: 1 }} variant="contained" color="secondary" disableElevation onClick={() => pushAction('divide')} href="#">
    ÷
  </Button>&nbsp;
  <Button sx={{ marginTop: 1 }} variant="contained" color="secondary" disableElevation onClick={() => pushAction('modulo')} href="#">
    %
  </Button>&nbsp;
  <Button sx={{ marginTop: 1 }} variant="contained" color="secondary" disableElevation onClick={clearInput} href="#">
    AC
  </Button>&nbsp;
  <Button sx={{ marginTop: 1 }} variant="contained" color="primary" disableElevation onClick={compute} href="#">
    =
  </Button>&nbsp;
</Container>)

const Container = styled.div`
  width: 98.5%;
  height: 200px;
  margin: auto;
  text-align: right;
`;