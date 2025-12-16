import type { Meta, StoryObj } from "@storybook/react";
import { FlexLayout } from "./FlexLayout";
import { Button } from "../Button/";

const meta: Meta<typeof FlexLayout> = {
  title: "Components/Layout/FlexLayout",
  component: FlexLayout,
};
export default meta;

type Story = StoryObj<typeof FlexLayout>;

export const 플렉스: Story = {
  render: () => (
    <FlexLayout direction="row" alignItems="center" gap={8}>
      <Button>Flex</Button>
      <Button>Layout</Button>
      <Button>Component</Button>
    </FlexLayout>
  ),
};
