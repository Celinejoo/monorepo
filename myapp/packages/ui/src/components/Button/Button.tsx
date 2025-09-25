import styled from "@emotion/styled";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const Root = styled.button<{ variant: "solid" | "ghost" }>`
  all: unset;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px 14px;
  font-weight: 600;

  background: ${({ variant }) =>
    variant === "solid" ? "#111" : "transparent"};
  color: ${({ variant }) => (variant === "solid" ? "#fff" : "#111")};
  border: ${({ variant }) => (variant === "ghost" ? "1px solid #111" : "none")};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "solid" | "ghost";
}

export function Button({ children, variant = "solid", ...rest }: ButtonProps) {
  return (
    <Root variant={variant} {...rest}>
      {children}
    </Root>
  );
}
