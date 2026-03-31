import styled from "@emotion/styled";

import { useId, useState } from "react";
import { Paragraph } from "../Paragraph";

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
  margin-bottom: 4px;
`;

const StyledSelect = styled.div<{ disabled?: boolean }>`
  width: 185px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid;
  border-color: var(--color-gray-300);
  background-color: ${({ disabled }) => disabled && `var(--color-gray-200)`};
  opacity: ${({ disabled }) => disabled && 0.5};
  cursor: pointer;
`;

const OptionList = styled.ul`
  width: 185px;
  padding: 8px 0;
  border: 1px solid var(--color-gray-300);
  margin-top: 4px;
  border-radius: 8px;
`;

const OptionItem = styled.li`
  padding: 8px;
  cursor: pointer;
  transition: all ease 0.2s;
  &:hover {
    background: var(--color-gray-100);
    border-radius: 4px;
    transform: scale(0.97);
  }
  &:active {
    transform: scale(0.97);
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
    defaultValue ?? options[0]?.value,
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
        <Paragraph typography="sub3" as="span">
          {selectedOption?.label}
        </Paragraph>
      </StyledSelect>
      {isOpen && (
        <OptionList>
          {options.map((opt) => (
            <OptionItem key={opt.value} onClick={() => handleSelect(opt.value)}>
              <Paragraph typography="sub3" as="span">
                {opt.label}
              </Paragraph>
            </OptionItem>
          ))}
        </OptionList>
      )}
    </>
  );
};
