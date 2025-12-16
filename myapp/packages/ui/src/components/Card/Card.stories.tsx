import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Typography } from "../Typography";

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
      <Card.Header title="title" />
      <Card.Contents>
        <Typography typography="bodyS">보더가 없는 카드 입니다.</Typography>
      </Card.Contents>
    </Card>
  ),
};

export const OutlineCard: Story = {
  args: {
    outlined: true,
  },
  render: (args) => (
    <Card {...args}>
      <Card.Header title="title" />
      <Card.Contents>
        <Typography typography="bodyS">보더가 있는 카드 입니다.</Typography>
      </Card.Contents>
    </Card>
  ),
};
