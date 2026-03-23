import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph } from "./Paragraph";

const meta: Meta<typeof Paragraph> = {
  title: "Components/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
  argTypes: {
    typography: {
      control: "radio",
      options: ["t1", "t2", "t3", "t4", "sub1", "sub2", "sub3", "sub4"],
    },
    color: {
      control: "radio",
      options: ["gray700", "pink500"],
    },
    display: {
      control: "radio",
      options: ["block", "inline-block", "inline"],
    },
    textAlign: {
      control: "radio",
      options: ["right", "left", "center"],
    },
    fontWeight: {
      control: "radio",
      options: ["light", "regular", "medium", "semibold", "bold"],
    },
  },
  args: {
    typography: "sub2",
    color: "gray700",
  },
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const DarkModeTest: Story = {
  render: (args) => (
    <>
      <div data-theme="dark" style={{ padding: 16 }}>
        <Paragraph {...args}>다크모드 텍스트</Paragraph>
      </div>

      <div style={{ padding: 16 }}>
        <Paragraph {...args}>라이트모드 텍스트</Paragraph>
      </div>
    </>
  ),
  args: {
    typography: "t1",
    color: "pink500",
  },
};
