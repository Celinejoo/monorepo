import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph } from "./Paragraph";

const meta: Meta<typeof Paragraph> = {
  title: "Components/Paragraph/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
  argTypes: {
    typography: {
      control: { type: "select" },
      defaultValue: "sub2",
      options: ["t1", "t2", "t3", "t4", "sub1", "sub2", "sub3", "sub4"],
    },
    color: {
      defaultValue: "gray700",
      control: { type: "radio" },
      options: ["gray700"],
    },
    display: {
      control: { type: "radio" },
      options: ["block", "inline-block", "inline"],
    },
    textAlign: {
      control: { type: "radio" },
      options: ["right", "left", "center"],
    },
    fontWeight: {
      control: { type: "radio" },
      options: ["light", "regular", "medium", "semibold", "bold"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Paragraph>;

export const 다크모드_테스트: Story = {
  render: () => (
    <>
      <div data-theme="dark">
        <Paragraph typography="t1" color="pink500">
          다크모드 텍스트
        </Paragraph>
      </div>
      <Paragraph typography="t1" color="pink500">
        라이트모드 텍스트
      </Paragraph>
    </>
  ),
};
