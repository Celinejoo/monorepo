import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { SizeMap, VariantMap } from "./type/floatingButton";
import { borderRadius, typography } from "@repo/tokens";

export interface FloatingButtonProps {
  children: ReactNode;
  variant?: VariantMap;
  size?: SizeMap;
  disabled?: boolean;
  onClick?: () => void;
}

export const FloatingButton = styled.button<FloatingButtonProps>(
  {
    cursor: "pointer",
    fontFamily: `${typography.fontFamily.sans}`,
    position: "fixed",
    bottom: "10px",
    display: "block",
    width: "calc(100% - 48px)",
    margin: "0 auto",
    borderRadius: borderRadius.full,
    transition: "all ease 0.2s",
    "&:active:not(:disabled)": {
      transform: "scale(0.99)",
    },
  },
  ({ variant = "solid" }) => VariantMap[variant],
  ({ size = "medium" }) => SizeMap[size],
  ({ disabled }) =>
    disabled
      ? css`
          opacity: 0.5;
          cursor: not-allowed;
        `
      : undefined
);
