import styled from "@emotion/styled";
import { colors } from "@repo/tokens";
import { useId } from "react";
import { FlexLayout } from "../FlexLayout";
import { Typography } from "../Typography";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  helperText?: string;
}

const StyledInput = styled.input<{ hasError?: boolean }>`
  font-size: 14px;
  height: 32px;
  border: none;
  border-bottom: 1px solid
    ${({ hasError }) => (hasError ? colors.status.error : colors.gray[400])};
  width: 100%;

  &:focus {
    outline: none;
    border-bottom: 1px solid;
    border-color: ${colors.primary[400]};
  }
`;

const StyledLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: ${colors.ui.textPrimary};
`;

const HelperText = ({
  children,
  error,
}: {
  children: string;
  error?: boolean;
}) => {
  return (
    <Typography typography="bodyS" color={error ? "error" : "secondary"}>
      {children}
    </Typography>
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

  return (
    <>
      <FlexLayout direction="column" gap={4}>
        {label && <StyledLabel htmlFor={inputId}>{label}</StyledLabel>}
        <StyledInput
          id={inputId}
          hasError={error}
          aria-invalid={error}
          {...props}
        />
        {helperText && <HelperText error={error}>{helperText}</HelperText>}
      </FlexLayout>
    </>
  );
};
