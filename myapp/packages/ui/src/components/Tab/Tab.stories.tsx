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
        { value: "others", label: "others" },
      ]}
    />
  ),
};

export const Scroll: Story = {
  render: () => (
    <Tab
      type="scrollable"
      items={[
        { value: "자바스크립트", label: "자바스크립트" },
        { value: "프로젝트", label: "프로젝트" },
        { value: "others", label: "others" },
      ]}
    />
  ),
};
