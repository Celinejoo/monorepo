import type { Meta, StoryObj } from "@storybook/react";
import { Tab } from "./Tab";

const meta: Meta<typeof Tab> = {
  title: "Components/Tab",
  component: Tab,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "`Tab` 컴포넌트는 `fixed`, `scrollable` 타입과 `label`, `label-icon`, `icon` 구성을 지원하는 탭 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    type: {
      control: "radio",
      description: "탭 레이아웃 타입을 설정합니다.",
      options: ["fixed", "scrollable"],
    },
    configuration: {
      control: "radio",
      description: "탭 아이템 표시 방식을 설정합니다.",
      options: ["label", "label-icon", "icon"],
    },
    items: {
      control: false,
      description: "탭에 표시할 아이템 목록입니다.",
    },
  },
  args: {
    type: "fixed",
    configuration: "label",
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Fixed: Story = {
  args: {
    type: "fixed",
    configuration: "label",
  },
  render: (args) => (
    <Tab
      {...args}
      items={[
        { value: "1", label: "사과" },
        { value: "2", label: "바나나" },
        { value: "3", label: "포도" },
      ]}
    />
  ),
};

export const Scrollable: Story = {
  args: {
    type: "scrollable",
    configuration: "label",
  },
  render: (args) => (
    <Tab
      {...args}
      items={[
        { value: "1", label: "아주아주긴탭이름" },
        { value: "2", label: "배" },
        { value: "3", label: "바나나" },
        { value: "4", label: "귤" },
        { value: "5", label: "복숭아" },
        { value: "6", label: "포도" },
        { value: "7", label: "수박" },
        { value: "8", label: "파인애플" },
        { value: "9", label: "망고" },
        { value: "10", label: "딸기" },
        { value: "11", label: "체리" },
        { value: "12", label: "키위" },
        { value: "13", label: "블루베리" },
        { value: "14", label: "라임" },
      ]}
    />
  ),
};

export const LabelIcon: Story = {
  args: {
    type: "fixed",
    configuration: "label-icon",
  },
  render: (args) => (
    <Tab
      {...args}
      items={[
        { value: "1", label: "사과", icon: "🍎" },
        { value: "2", label: "바나나", icon: "🍌" },
        { value: "3", label: "포도", icon: "🍇" },
      ]}
    />
  ),
};

export const IconOnly: Story = {
  args: {
    type: "fixed",
    configuration: "icon",
  },
  render: (args) => (
    <Tab
      {...args}
      items={[
        { value: "1", icon: "🍎" },
        { value: "2", icon: "🍌" },
        { value: "3", icon: "🍇" },
      ]}
    />
  ),
};
