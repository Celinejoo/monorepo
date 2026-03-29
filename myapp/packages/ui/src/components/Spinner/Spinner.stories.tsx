import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "`Spinner` 컴포넌트는 스피너는 화면이나 요소의 다양한 처리 상태를 시각적으로 표시한 것으로 일정 시간 동안 대기해야 함을 사용자에게 안내합니다.",
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "상태 알려줘야 할 때 적용, 화면에 보여지지 않습니다.",
    },
    children: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Overview: Story = {};
