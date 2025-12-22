import styled from "@emotion/styled";

import { TabsProps, TabType } from "./type/tab";
import { colors } from "@repo/tokens";
import { css } from "@emotion/react";
import { useState } from "react";
import { Typography } from "../Typography";

export const TabLayer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabList = styled.ul<{ type: TabType }>`
  display: flex;
  align-items: center;
  text-align: center;

  ${({ type }) =>
    type === "scrollable" &&
    css`
      overflow-x: auto;
      &::-webkit-scrollbar {
        height: 4px;
      }
      > li {
        width: auto;
      }
    `}

  ${({ type }) =>
    type === "fixed" &&
    css`
      > li {
        width: 120px;
      }
    `}
    ${({ type }) =>
    type === "scrollable" &&
    css`
      > li {
        padding: 14px 8px;
      }
    `}
`;

export const TabItem = styled.li<{
  active: boolean;
}>`
  padding: 14px 0;
  position: relative;
  border-bottom: 1px solid;
  ${({ active }) =>
    active
      ? css`
          border-bottom: 2px inset;
          border-color: ${colors.gray[700]};
        `
      : css`
          border-color: ${colors.gray[400]};
        `}
`;

export const TabButton = styled.button<{
  active: boolean;
}>`
  ${({ active }) =>
    active &&
    css`
      > span {
        font-weight: 700;
      }
    `}
`;

const Label = ({ children }: { children: React.ReactNode }) => (
  <Typography typography="body" as="span">
    {children}
  </Typography>
);

const IconWrap = styled.span`
  line-height: 0;
  width: 20px;
  heiht: 20px;
`;

export const Tab: React.FC<TabsProps> = ({
  type = "fixed",
  items,
  value,
  defaultValue,
  onChange,
  configuration = "label",
  className,
}) => {
  const [innerValue, setInnerValue] = useState(defaultValue ?? items[0]?.value);
  const isControlled = value !== undefined;
  const activeValue = isControlled ? value : innerValue;

  const handleChange = (next: string) => {
    if (!isControlled) setInnerValue(next);
    onChange?.(next);
  };

  return (
    <TabLayer className={className}>
      <TabList type={type}>
        {items.map((item, key) => {
          const active = item.value === activeValue;
          const showLabel =
            configuration === "label" || configuration === "label-icon";
          const showIcon =
            configuration === "icon" || configuration === "label-icon";

          return (
            <TabItem active={active} key={key}>
              <TabButton
                active={active}
                onClick={() => handleChange(item.value)}
              >
                {showIcon && <IconWrap>{item.icon}</IconWrap>}
                {showLabel && <Label>{item.label}</Label>}
              </TabButton>
            </TabItem>
          );
        })}
      </TabList>
    </TabLayer>
  );
};
