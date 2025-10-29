import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { CSSProperties } from "react";

export interface FlexLayoutProps {
  direction?: CSSProperties["flexDirection"];
  wrap?: CSSProperties["flexWrap"];
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  gap?: number;
}

export const FlexLayout = styled.div<FlexLayoutProps>(
  ({ direction, alignItems, justifyContent, wrap }) => ({
    display: "flex",
    flexWrap: wrap,
    flexDirection: direction,
    alignItems: alignItems,
    justifyContent: justifyContent,
  }),
  ({ gap }) =>
    gap
      ? css`
          gap: ${gap}px;
        `
      : null
);
