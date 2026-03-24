import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { Paragraph } from "../Paragraph";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const 뱃지: Story = {
  render: () => (
    <Badge background="pink100" size="small">
      <Paragraph typography="sub3" as="span" color="pink700">
        뱃지
      </Paragraph>
    </Badge>
  ),
};
