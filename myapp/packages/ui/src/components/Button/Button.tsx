import styled from "@emotion/styled";
import type { ReactNode } from "react";
import { buttonSizeMap, buttonVariantMap } from "./type/button";
import { css } from "@emotion/react";
import { typography } from "@repo/tokens";

export interface ButtonProps {
  children: ReactNode;
  variant?: buttonVariantMap;
  size?: buttonSizeMap;
  full?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = styled.button<ButtonProps>(
  {
    cursor: "pointer",
    fontFamily: `${typography.fontFamily.sans}`,
    border: "none",
    transition: "all ease 0.2s",
    "&:active:not(:disabled)": {
      transform: "scale(0.97)",
    },
  },
  ({ variant }) => buttonVariantMap[variant],
  ({ size = "medium" }) => buttonSizeMap[size],
  ({ full }) =>
    full
      ? css`
          width: 100%;
          display: block;
        `
      : undefined,
  ({ disabled }) =>
    disabled
      ? css`
          opacity: 0.5;
          cursor: not-allowed;
        `
      : undefined
);
