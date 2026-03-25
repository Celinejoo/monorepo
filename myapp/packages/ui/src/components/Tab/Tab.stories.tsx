import type { Meta, StoryObj } from "@storybook/react";
import { Tab } from "./Tab";

const meta: Meta<typeof Tab> = {
  title: "Components/Tab",
  component: Tab,
};
export default meta;

type Story = StoryObj<typeof Tab>;

export const Fixed: Story = {
  render: () => (
    <Tab
      type="fixed"
      items={[
        { value: "자바스크립트", label: "자바스크립트" },
        { value: "프로젝트", label: "프로젝트" },
      ]}
    />
  ),
};

export const Scroll: Story = {
  render: () => (
    <Tab
      type="scrollable"
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
  render: () => (
    <Tab
      type="scrollable"
      configuration="label-icon"
      items={[
        { value: "1", label: "사과", icon: "‼️" },
        { value: "2", label: "배", icon: "🔅" },
      ]}
    />
  ),
};

export const Icon: Story = {
  render: () => (
    <Tab
      type="scrollable"
      configuration="icon"
      items={[
        { value: "1", icon: "‼️" },
        { value: "2", icon: "🔅" },
      ]}
    />
  ),
};
