import styled from "@emotion/styled";

import { useId, useState } from "react";
import { Flex } from "../FlexLayout";
import { Paragraph } from "../Paragraph";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  helperText?: string;
}

const StyledInput = styled.input<{ error?: boolean }>`
  font-size: 14px;
  height: 32px;
  border: none;
  border-bottom: 1px solid var(--color-gray-400);
  width: 100%;

  &:focus {
    outline: none;
    border-bottom: 1px solid;
    border-color: ${({ error }) =>
      error ? `var(--color-red-500)` : `var(--color-blue-500)`};
  }
`;

const Label = ({
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

const HelperText = ({
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
