import styled from "@emotion/styled";

import { useId, useState } from "react";
import { Flex } from "../FlexLayout";
import { Paragraph } from "../Paragraph";
import { css } from "@emotion/react";

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "filled" | "outlined";
  label?: string;
  error?: boolean;
  helperText?: string;
}

const StyledInput = styled.input<TextFieldProps>`
  font-size: var(--font-size-16);
  height: 40px;
  width: 100%;

  &:focus {
    outline: none;
  }

  ${({ variant = "outlined", error }) =>
    variant === "outlined"
      ? css`
      border:none;
      border-bottom: 1px solid var(--color-gray-400);

      &:focus {
        border-bottom: 1px solid;
        border-bottom-color: ${error ? `var(--color-red-500)` : `var(--color-blue-500)`};
    `
      : css`
          border: 1px solid var(--color-gray-400);
          border-radius: 8px;
          padding:8px;

          &:focus {
            border: 1px solid;
            border-color: ${error ? `var(--color-red-500)` : `var(--color-blue-500)`};
        `}
`;

export const Label = ({
  children,
  isFocused,
  error,
}: {
  isFocused: boolean;
  children: string;
  error?: boolean;
}) => {
  return (
    <Paragraph
      typography="sub3"
      color={error ? "red500" : isFocused ? "blue500" : "gray500"}
      as="label"
    >
      {children}
    </Paragraph>
  );
};

export const HelperText = ({
  children,
  error,
}: {
  children: string;
  error?: boolean;
}) => {
  return (
    <Paragraph typography="sub3" color={error ? "red500" : "blue500"}>
      {children}
    </Paragraph>
  );
};

export const TextField = ({
  label,
  id,
  error,
  helperText,
  variant,
  ...props
}: TextFieldProps) => {
  const inputId = id ?? useId();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <Flex direction="column" gap={4}>
        <Flex.Item>
          {label && (
            <Label error={error} isFocused={isFocused}>
              {label}
            </Label>
          )}
        </Flex.Item>
        <Flex.Item>
          <StyledInput
            variant={variant}
            id={inputId}
            error={error}
            aria-invalid={error}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />
        </Flex.Item>
        {error && (
          <Flex.Item>
            {helperText && <HelperText error={error}>{helperText}</HelperText>}
          </Flex.Item>
        )}
      </Flex>
    </>
  );
};
