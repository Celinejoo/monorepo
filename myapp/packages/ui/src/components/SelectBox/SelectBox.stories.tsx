import type { Meta, StoryObj } from "@storybook/react";
import { SelectBox } from "./SelectBox";

const meta: Meta<typeof SelectBox> = {
  title: "Components/SelectBox",
  component: SelectBox,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "`SelectBox` 컴포넌트는 메뉴형태로 항목을 선택하거나 상태를 확인하고 바꿀 수 있습니다. ",
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "셀렉트 박스 라벨",
    },
    options: {
      control: false,
      description: "선택 가능한 옵션 배열",
    },
    value: {
      control: "text",
      description: "현재 선택된 값 (controlled)",
    },
    defaultValue: {
      control: "text",
      description: "초기 선택 값 (uncontrolled)",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 여부",
    },
    onChange: {
      action: "changed",
      description: "값 변경 이벤트",
    },
  },
  args: {
    label: "과일",
    options: [
      { label: "사과", value: "apple" },
      { label: "바나나", value: "banana" },
      { label: "딸기", value: "strawberry" },
    ],
    defaultValue: "apple",
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof SelectBox>;

export const Overview: Story = {
  render: (args) => <SelectBox {...args} />,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <SelectBox {...args} />,
};
