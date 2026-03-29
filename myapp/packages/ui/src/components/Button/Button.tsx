import styled from "@emotion/styled";
import type { ReactNode } from "react";
import {
  ButtonColor,
  buttonColorMap,
  ButtonSize,
  buttonSizeMap,
  ButtonVariant,
  buttonVariantMap,
} from "./type/button";
import { css } from "@emotion/react";

export interface ButtonProps {
  children: ReactNode;
  color: ButtonColor;
  variant: ButtonVariant;
  size: ButtonSize;
  display?: "inline" | "block" | "full";
  disabled?: boolean;
}

export const Button = styled.button<ButtonProps>(
  {
    justifyContent: "center",
    cursor: "pointer",
    border: "none",
    textAlign: "center",
    transition: "all ease 0.2s",
    "&:active:not(:disabled)": {
      transform: "scale(0.97)",
    },
  },
  ({ display }) =>
    display === "full"
      ? css`
          width: 100%;
          justify-content: center;
        `
      : display === "block"
        ? css`
            display: flex;
          `
        : css`
            display: inline-flex;
          `,

  ({ variant }) => buttonVariantMap[variant],
  ({ color }) => buttonColorMap[color],

  ({ size = "medium" }) => buttonSizeMap[size],
  ({ disabled }) =>
    disabled
      ? css`
          opacity: 0.5;
          cursor: not-allowed;
        `
      : undefined,
);
