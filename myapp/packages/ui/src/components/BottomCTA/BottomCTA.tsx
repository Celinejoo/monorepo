import styled from "@emotion/styled";

import { Button, ButtonProps } from "../Button";
import { Flex } from "../FlexLayout";

export interface ButtonCTAProps
  extends Pick<ButtonProps, "children" | "color" | "variant" | "size"> {}

export interface DoubleProps {
  left: React.ReactNode;
  right: React.ReactNode;
  leftProps?: ButtonCTAProps;
  rightProps?: ButtonCTAProps;
}

export const BottomCTABase = styled.div({
  position: "fixed",
  bottom: 0,
  left: "24px",
  width: `calc(100% - 48px)`,
  padding: "0 0 24px",
  paddingBottom: "calc(env(safe-area-inset-bottom) + 15px)",
  background: "var(--color-white-0)",
  boxSizing: "border-box",
});

export const BottomCTABaseDiv = styled.div({
  flexGrow: 1,
});

export const Single = ({
  children,
  color,
  variant,
  size = "large",
}: ButtonCTAProps) => (
  <BottomCTABase>
    <Button display="full" color={color} variant={variant} size={size}>
      {children}
    </Button>
  </BottomCTABase>
);

export const Double = ({ left, right, leftProps, rightProps }: DoubleProps) => (
  <BottomCTABase>
    <Flex gap={8}>
      <BottomCTABaseDiv>
        <Button
          display="full"
          color={leftProps?.color ?? "light"}
          variant={leftProps?.variant ?? "fill"}
          size={leftProps?.size ?? "large"}
        >
          {left}
        </Button>
      </BottomCTABaseDiv>
      <BottomCTABaseDiv>
        <Button
          display="full"
          color={rightProps?.color ?? "primary"}
          variant={rightProps?.variant ?? "fill"}
          size={rightProps?.size ?? "large"}
        >
          {right}
        </Button>
      </BottomCTABaseDiv>
    </Flex>
  </BottomCTABase>
);

export const BottomCTA = {
  Single,
  Double,
};
