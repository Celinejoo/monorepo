import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { CSSProperties } from "react";

export interface FlexProps {
  direction?: CSSProperties["flexDirection"];
  wrap?: CSSProperties["flexWrap"];
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  gap?: number;
  children: React.ReactNode;
}

export interface FlexItemProps {
  children: React.ReactNode;
}

const StyledFlex = styled.div<FlexProps>(
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
      : null,
);

const FlexBase = ({
  direction,
  wrap,
  alignItems,
  justifyContent,
  gap,
  children,
}: FlexProps) => (
  <StyledFlex
    direction={direction}
    wrap={wrap}
    alignItems={alignItems}
    justifyContent={justifyContent}
    gap={gap}
  >
    {children}
  </StyledFlex>
);

const FlexItem = ({ children }: FlexItemProps) => <>{children}</>;

interface FlexCompoundComponent extends React.FC<FlexProps> {
  Item: React.FC<FlexItemProps>;
}

export const Flex = Object.assign(FlexBase, {
  Item: FlexItem,
}) as FlexCompoundComponent;
