import styled from "@emotion/styled";
import { colors, spacing } from "@repo/tokens";
import { useId, useState } from "react";
import { Typography } from "../Typography";

interface OptionItem {
  value: string;
  label: string;
}

interface SelectBoxProps {
  id?: string;
  label?: string;
  options: OptionItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

const StyledLabel = styled.label`
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  color: ${colors.ui.textPrimary};
  margin-bottom: ${spacing[1]};
`;

const StyledSelect = styled.div<{ disabled?: boolean }>`
  width: 185px;
  padding: ${spacing[2]};
  border: 1px solid ${colors.gray[400]};
  border-radius: ${spacing[2]};
  background-color: ${({ disabled }) => disabled && colors.gray[200]};
  opacity: ${({ disabled }) => disabled && 0.5};
`;

const OptionList = styled.ul`
  width: 185px;
  padding: ${spacing[2]} 0;
  border: 1px solid ${colors.gray[300]};
  margin-top: ${spacing[1]};
  border-radius: ${spacing[2]};
`;

const OptionItem = styled.li`
  padding: ${spacing[2]};
  cursor: pointer;

  &:hover {
    background: ${colors.gray[100]};
  }
`;

export const SelectBox = ({
  id,
  label,
  value,
  defaultValue,
  onChange,
  options,
  disabled = false,
  ...props
}: SelectBoxProps) => {
  const selectId = id ?? useId();
  const [isOpen, setIsOpen] = useState(false);

  const [innerValue, setInnerValue] = useState(
    defaultValue ?? options[0]?.value
  );
  const isControlled = value !== undefined;
  const selectedValue = isControlled ? value : innerValue;
  const selectedOption = options.find((opt) => opt.value === selectedValue);

  const handleSelect = (next: string) => {
    if (disabled) return;
    if (!isControlled) setInnerValue(next);
    onChange?.(next);
    setIsOpen(false);
  };

  return (
    <>
      {label && <StyledLabel htmlFor={selectId}>{label}</StyledLabel>}
      <StyledSelect
        id={selectId}
        disabled={disabled}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        {...props}
      >
        <Typography typography="bodyS" as="span">
          {selectedOption?.label}
        </Typography>
      </StyledSelect>
      {isOpen && (
        <OptionList>
          {options.map((opt) => (
            <OptionItem key={opt.value} onClick={() => handleSelect(opt.value)}>
              <Typography typography="bodyS" as="span">
                {opt.label}
              </Typography>
            </OptionItem>
          ))}
        </OptionList>
      )}
    </>
  );
};
