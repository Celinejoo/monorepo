import styled from "@emotion/styled";
import { colors } from "@repo/tokens";

export const Input = styled.input`
  padding: 0 16px;
  font-size: 16px;
  height: 48px;
  font-weight: 500;
  border: 1px solid ${colors.gray[700]};
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 2px solid;
    border-color: ${colors.primary[400]};
  }

  &[aria-invalid="true"] {
    border: 2px solid;
    border-color: ${colors.status.error};
  }
`;

export default Input;
