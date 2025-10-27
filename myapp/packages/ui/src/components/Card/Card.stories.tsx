import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  args: {
    outlined: true,
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const FullCard: Story = {
  args: {
    outlined: false,
  },
  render: (args) => (
    <Card {...args}>
      <div>
        카드<br></br>
        안의
        <br></br>
        내용들
      </div>
    </Card>
  ),
};

export const OutlineCard: Story = {
  args: {
    outlined: true,
  },
  render: (args) => (
    <Card {...args}>
      <div>
        보더가 있는 카드의<br></br>
        안의
        <br></br>
        내용들
      </div>
    </Card>
  ),
};
