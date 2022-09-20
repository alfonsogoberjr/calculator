import styled from "@emotion/styled";
import { black} from "@components/colors";
import { small, xSmall } from "@components/media";
import { Arial } from "./fonts";

export const CalculatorText = styled.h1`
  flex: 1;
  font-size: 30px;
  font-family: ${Arial};
  color: ${black};
  text-align: right;
  @media only screen and ${xSmall} {
  }
`;