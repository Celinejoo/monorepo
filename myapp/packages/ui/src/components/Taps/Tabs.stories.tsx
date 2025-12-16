import type { Meta, StoryObj } from "@storybook/react";
import { Tab } from "./Taps";

const meta: Meta<typeof Tab> = {
  title: "Components/Tab",
  component: Tab,
};
export default meta;

type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  render: () => (
    <Tab
      items={[
        { value: "자바스크립트", label: "자바스크립트" },
        { value: "프로젝트", label: "프로젝트" },
        { value: "others", label: "others" },
      ]}
    />
  ),
};
