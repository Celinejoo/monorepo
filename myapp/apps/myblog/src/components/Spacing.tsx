import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface SpacingProps {
  x?: number;
  y?: number;
}

export const Spacing = styled.div<SpacingProps>(({ x, y }) =>
  x
    ? css`
        width: ${x}px;
      `
    : css`
        height: ${y}px;
      `
);
