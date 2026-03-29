import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "./FlexLayout";
import { Card } from "../Card";
const meta: Meta<typeof Flex> = {
  title: "Layout/Flex",
  component: Flex,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "`Flex` 컴포넌트는 flex 형태로 `Flex.Item` 컴포넌트들을 배치하는 컴포넌트에요.",
      },
    },
  },
  argTypes: {
    direction: {
      control: "select",
      description: "flex 방향을 결정합니다.",
      options: ["row", "column", "row-reverse", "column-reverse"],
    },
    wrap: {
      control: "select",
      description: "flex 줄바꿈 여부를 설정합니다.",
      options: ["nowrap", "wrap", "wrap-reverse"],
    },
    alignItems: {
      control: "select",
      description: "교차축 정렬을 설정합니다.",
      options: ["stretch", "flex-start", "center", "flex-end", "baseline"],
    },
    justifyContent: {
      control: "select",
      description: "주축 정렬을 설정합니다.",
      options: [
        "flex-start",
        "center",
        "flex-end",
        "space-between",
        "space-around",
        "space-evenly",
      ],
    },
    gap: {
      control: { type: "number", min: 0, step: 4 },
      description: "아이템 사이 간격(px)",
    },
    children: {
      control: false,
    },
  },
  args: {
    direction: "row",
    wrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
};
export default meta;

type Story = StoryObj<typeof Flex>;

export const Overview: Story = {
  render: (args) => (
    <Flex {...args}>
      <Flex.Item>
        <Card>아이템1</Card>
      </Flex.Item>
      <Flex.Item>
        <Card>아이템2</Card>
      </Flex.Item>
      <Flex.Item>
        <Card>아이템3</Card>
      </Flex.Item>
    </Flex>
  ),
};
