import { useState } from "react";
import styled from "@emotion/styled";

import { css } from "@emotion/react";
import { Paragraph } from "../Paragraph";
import { Flex } from "../FlexLayout";

export type TabType = "fixed" | "scrollable";
export type TabSize = "small" | "large";
export type TabConfiguration = "label" | "icon" | "label-icon";

export interface TabsProps {
  type: TabType;
  items: TabItem[];

  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  configuration?: TabConfiguration;
}

export interface TabItem {
  value: string;
  label?: string;
  icon?: React.ReactNode;
}

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
    `}
`;

export const TabItem = styled.li<{
  active: boolean;
  type: TabType;
}>`
  flex: 1 1 0;
  padding: 14px 0;
  position: relative;
  border-bottom: 1px solid;
  border-color: var(--color-gray-400);
  ${({ active }) =>
    active &&
    css`
      border-bottom: 2px inset;
      border-color: var(--color-gray-700);
    `}
  ${({ type }) =>
    type === "scrollable" &&
    css`
      white-space: nowrap;
      padding: 14px 8px;
      flex: 0 0 auto;
      width: auto;
    `}
`;

const Label = ({
  children,
  active,
}: {
  children: React.ReactNode;
  active: boolean;
}) => (
  <Paragraph
    typography="sub2"
    as="span"
    fontWeight={active ? "bold" : "regular"}
  >
    {children}
  </Paragraph>
);

export const Tab = ({
  type = "fixed",
  items,
  value,
  defaultValue,
  onChange,
  configuration = "label",
}: TabsProps) => {
  const [innerValue, setInnerValue] = useState(defaultValue ?? items[0]?.value);
  const isControlled = value !== undefined;
  const activeValue = isControlled ? value : innerValue;

  const handleChange = (next: string) => {
    if (!isControlled) setInnerValue(next);
    onChange?.(next);
  };

  return (
    <Flex direction="column">
      <TabList type={type}>
        {items.map((item, value) => {
          const active = item.value === activeValue;
          const showLabel =
            configuration === "label" || configuration === "label-icon";
          const showIcon =
            configuration === "icon" || configuration === "label-icon";

          return (
            <TabItem active={active} key={value} type={type}>
              <button onClick={() => handleChange(item.value)}>
                {showIcon ? <i>{item.icon}</i> : null}
                {showLabel ? <Label active={active}>{item.label}</Label> : null}
              </button>
            </TabItem>
          );
        })}
      </TabList>
    </Flex>
  );
};

/* <Tab type ='fixed' size>
  <Tab.Item/> 
   <Tab.Item/> 
</Tab> */
/*  

<div> Tab
<ul> ---> 스크롤 되어야하는 부분

  <li><button>아이콘, 텍스트</button></li> Tab.Item
  <li><button>아이콘, 텍스트</button></li> 
  <li><button>아이콘, 텍스트</button></li>
</ul>

</div>

*/
