import type { Meta, StoryObj } from "@storybook/react";
import { List } from "./Listitem";
import { Badge } from "../Badge";
import { Paragraph } from "../Paragraph";

const meta: Meta<typeof List> = {
  title: "Components/ListItem",
  component: List,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "`List` 컴포넌트는 `Leading`, `Contents`, `Trailing` 영역으로 구성된 리스트 아이템 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    as: {
      control: "radio",
      options: ["div", "li"],
      description: "렌더링할 HTML 요소를 지정합니다.",
    },
    showDivider: {
      control: "boolean",
      description: "하단 구분선 표시 여부를 설정합니다.",
    },
    padding: {
      control: "text",
      description: "내부 여백 값을 설정합니다.",
    },
    margin: {
      control: { type: "number" },
      description: "바깥 여백 값을 설정합니다.",
    },
    gap: {
      control: { type: "number" },
      description: "내부 영역 사이 간격을 설정합니다.",
    },
    children: {
      control: false,
    },
  },
  args: {
    as: "li",
    showDivider: true,
    padding: "24",
    margin: 16,
    gap: 12,
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const Overview: Story = {
  render: (args) => (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      <List {...args}>
        <List.Leading>
          <Paragraph typography="sub1">1</Paragraph>
        </List.Leading>
        <List.Contents title="첫 번째 아이템" subtitle="2026.03.24" />
        <List.Trailing>
          <Badge size="small" background="green500">
            <Paragraph color="green100" typography="sub4">
              완료
            </Paragraph>
          </Badge>
        </List.Trailing>
      </List>
      <List {...args}>
        <List.Leading>
          <Paragraph typography="sub1">2</Paragraph>
        </List.Leading>
        <List.Contents title="두 번째 아이템" subtitle="2026.03.25" />
        <List.Trailing>
          <Badge size="small" background="green500">
            <Paragraph color="green100" typography="sub4">
              진행중
            </Paragraph>
          </Badge>
        </List.Trailing>
      </List>
      <List padding="24" margin={16} gap={12} as="li">
        <List.Leading>
          <Paragraph typography="sub1">3</Paragraph>
        </List.Leading>
        <List.Contents title="세 번째 아이템" subtitle="2026.03.26" />
        <List.Trailing>
          <Badge size="small" background="green500">
            <Paragraph color="green100" typography="sub4">
              대기중
            </Paragraph>
          </Badge>
        </List.Trailing>
      </List>
    </ul>
  ),
};
