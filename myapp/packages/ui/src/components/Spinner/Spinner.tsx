import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export interface SpinnerProps {
  label?: string;
  children?: React.ReactNode;
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &::before {
    content: "";
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 4px solid var(--color-gray-200);
    border-top-color: var(--color-blue-500);

    animation: ${spin} 900ms linear infinite;
  }
`;

export const SpinnerText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const Spinner = ({ label, children }: SpinnerProps) => {
  return (
    <SpinnerBox role="status" aria-live="polite">
      <SpinnerText>{label}</SpinnerText>
      {children && children}
    </SpinnerBox>
  );
};
