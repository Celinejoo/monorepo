import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "./FlexLayout";
import { Card } from "../Card";
const meta: Meta<typeof Flex> = {
  title: "Components/Flex",
  component: Flex,
};
export default meta;

type Story = StoryObj<typeof Flex>;

export const Column: Story = {
  render: () => (
    <Flex direction="column" gap={12} alignItems="center">
      <Flex.Item>
        <Card>아이템1</Card>
      </Flex.Item>
      <Flex.Item>
        <Card>아이템2</Card>
      </Flex.Item>
    </Flex>
  ),
};

export const Row: Story = {
  render: () => (
    <Flex direction="row" gap={12} alignItems="center">
      <Flex.Item>
        <Card>아이템1</Card>
      </Flex.Item>
      <Flex.Item>
        <Card>아이템2</Card>
      </Flex.Item>
    </Flex>
  ),
};
