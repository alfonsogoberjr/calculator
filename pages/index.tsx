import styled from "@emotion/styled";
// When using TypeScript 4.x and above
import type {} from "@mui/lab/themeAugmentation";
import {
  Calculator,
} from "@components/calculator"
import { xSmall } from "@components/media";
import { Page } from "@components/Page";

export default function IndexPage() {
  return (
    <Page>
      <Calculator />
    </Page>
  );
}
