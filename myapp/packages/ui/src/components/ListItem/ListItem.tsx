import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Paragraph } from "../Paragraph";
import { Flex } from "../FlexLayout";
import { Border } from "../Border/Border";

export interface ListProps {
  children: React.ReactNode;
  showDivider?: boolean;
  onClick?: () => void;
  as?: "div" | "li";
  padding?: "16" | "24";
  margin?: number;
  gap?: number;
}

export interface LeadingProps {
  children: React.ReactNode;
}
export interface TrailingProps {
  children: React.ReactNode;
}

export interface ContentsTextProps {
  title: string;
  subtitle?: string;
}

const StyledList = styled.div<ListProps>(
  {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
  },
  ({ gap = 24 }) =>
    gap &&
    css`
      gap: 0 ${gap}px;
    `,
  ({ padding = 24 }) =>
    padding &&
    css`
      padding: 0 ${padding}px;
    `,
  ({ margin }) =>
    margin &&
    css`
      margin: ${margin}px 0;
    `,
);

const ListBase = ({
  onClick,
  as,
  children,
  showDivider,
  padding,
  margin,
}: ListProps) => (
  <>
    <StyledList
      onClick={onClick}
      as={as}
      showDivider={showDivider}
      padding={padding}
      margin={margin}
    >
      {children}
    </StyledList>
    {showDivider && <Border varient="padding24" />}
  </>
);

const Leading = ({ children }: LeadingProps) => {
  return <div>{children}</div>;
};

const Trailing = ({ children }: TrailingProps) => {
  return <div style={{ marginLeft: "auto" }}>{children}</div>;
};

const Contents = ({ title, subtitle }: ContentsTextProps) => {
  return (
    <Flex direction="column" gap={4}>
      <Flex.Item>
        <Paragraph typography="sub2" fontWeight="bold">
          {title}
        </Paragraph>
      </Flex.Item>
      <Flex.Item>
        <Paragraph typography="sub3">{subtitle}</Paragraph>
      </Flex.Item>
    </Flex>
  );
};

interface ListCompoundComponent extends React.FC<ListProps> {
  Leading: React.FC<LeadingProps>;
  Contents: React.FC<ContentsTextProps>;
  Trailing: React.FC<TrailingProps>;
}

export const List: ListCompoundComponent = Object.assign(ListBase, {
  Leading: Leading,
  Contents: Contents,
  Trailing: Trailing,
});
