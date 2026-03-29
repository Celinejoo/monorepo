import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Flex } from "../FlexLayout";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "어떤 기능이나 동작을 실행하거나 기능을 사용하기 위한 상태로 변경하는 요소",
      },
    },
  },
  args: {
    children: "버튼",
    variant: "fill",
    color: "primary",
    size: "medium",
    disabled: false,
    display: "inline",
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      description: "버튼의 배경 농도를 결정합니다.",
      options: ["fill", "weak"],
    },
    size: {
      control: { type: "radio" },
      description: "버튼의 사이즈를 결정합니다.",
      options: ["small", "medium", "large", "xlarge"],
    },
    color: {
      control: { type: "radio" },
      description: "버튼의 컬러를 결정합니다.",
      options: ["primary", "danger", "light", "dark", "text"],
    },
    display: {
      control: { type: "radio" },
      description: "버튼의 형태를 변경합니다.",
      options: ["block", "inline", "full"],
    },
    disabled: {
      control: "boolean",
      description: "버튼의 비활성화 상태를 나태닙니다.",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Overview: Story = {
  args: {
    children: "버튼",
    variant: "fill",
    color: "primary",
    size: "medium",
    disabled: false,
    display: "inline",
  },
};

export const color: Story = {
  name: "Color",
  render: () => (
    <Flex gap={8}>
      <Button color="primary" variant="fill" size="medium">
        버튼
      </Button>
      <Button color="danger" variant="fill" size="medium">
        버튼
      </Button>
      <Button color="light" variant="fill" size="medium">
        버튼
      </Button>
      <Button color="dark" variant="fill" size="medium">
        버튼
      </Button>
      <Button color="text" variant="fill" size="medium">
        버튼
      </Button>
    </Flex>
  ),
};

export const Variant: Story = {
  render: () => (
    <Flex gap={8}>
      <Button color="primary" variant="fill" size="medium">
        버튼
      </Button>
      <Button color="primary" variant="weak" size="medium">
        버튼
      </Button>
    </Flex>
  ),
};

export const Size: Story = {
  render: () => (
    <Flex gap={8} alignItems="center">
      <Button color="primary" variant="fill" size="small">
        버튼
      </Button>
      <Button color="primary" variant="weak" size="medium">
        버튼
      </Button>
      <Button color="primary" variant="weak" size="large">
        버튼
      </Button>
      <Button color="primary" variant="weak" size="xlarge">
        버튼
      </Button>
    </Flex>
  ),
};

export const Display: Story = {
  render: () => (
    <Flex direction="column" gap={8} alignItems="center">
      <Button color="primary" variant="fill" size="medium" display="inline">
        버튼
      </Button>
      <Button color="primary" variant="fill" size="medium" display="block">
        버튼
      </Button>

      <Button color="primary" variant="weak" size="large" display="full">
        버튼
      </Button>
    </Flex>
  ),
};
export const Disabled: Story = {
  render: () => (
    <Flex direction="column" gap={8} alignItems="center">
      <Button
        color="primary"
        variant="fill"
        size="medium"
        display="inline"
        disabled
      >
        버튼
      </Button>
      <Button
        color="primary"
        variant="fill"
        size="medium"
        display="block"
        disabled
      >
        버튼
      </Button>

      <Button
        color="primary"
        variant="weak"
        size="large"
        display="full"
        disabled
      >
        버튼
      </Button>
    </Flex>
  ),
};
