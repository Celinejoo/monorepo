import { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { IconButton } from "../IconButton";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "`Tooltip` 컴포넌트는 사용자가 특정 요소에 hover 또는 focus 할 때 추가 정보를 제공합니다.",
      },
    },
  },
  argTypes: {
    placement: {
      control: "select",
      description: "툴팁 방향을 결정합니다.",
      options: ["top", "bottom", "left", "right"],
    },
    content: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: "좋아요 눌러주세요",
    placement: "bottom",
  },
  render: (args) => (
    <Tooltip {...args}>
      <IconButton label="0" icon={<>♥️</>} />
    </Tooltip>
  ),
};

export const Placements: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 20 }}>
      <Tooltip content="top" placement="top">
        <IconButton icon={<>↑</>} />
      </Tooltip>
      <Tooltip content="bottom" placement="bottom">
        <IconButton icon={<>↓</>} />
      </Tooltip>
      <Tooltip content="left" placement="left">
        <IconButton icon={<>←</>} />
      </Tooltip>
      <Tooltip content="right" placement="right">
        <IconButton icon={<>→</>} />
      </Tooltip>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    content: "안보여야 함",
    disabled: true,
  },
  render: (args) => (
    <Tooltip {...args}>
      <IconButton icon={<>🚫</>} />
    </Tooltip>
  ),
};

export const LongText: Story = {
  args: {
    content: `이것은 매우 긴 Tooltip 텍스트입니다. 
      여러 줄로 잘 보이는지 확인합니다.
      3줄째`,
  },
  render: (args) => (
    <Tooltip {...args}>
      <IconButton icon={<>💬</>} />
    </Tooltip>
  ),
};
