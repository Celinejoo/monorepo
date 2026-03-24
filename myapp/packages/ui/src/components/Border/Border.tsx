import { css } from "@emotion/react";
import styled from "@emotion/styled";

export interface BorderProps {
  varient?: "full" | "padding24";
  height?: "1" | "16";
}

export const Border = styled.div<BorderProps>(
  {
    background: "var(--color-gray-200)",
  },
  ({ varient = "full" }) =>
    varient === "full"
      ? css`
          padding: 0;
          width: "100%";
        `
      : css`
          width: calc(100% - 48px);
          margin: 0 auto;
          padding: 0 24px;
          box-sizing: border-box;
        `,
  ({ height = "1" }) =>
    height === "16"
      ? css`
          height: 16px;
        `
      : css`
          height: 1px;
        `,
);
