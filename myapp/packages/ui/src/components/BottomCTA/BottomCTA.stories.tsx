import type { Meta, StoryObj } from "@storybook/react";
import { BottomCTA, Single } from "./BottomCTA";

const meta: Meta<typeof Single> = {
  title: "Components/BottomCTA",
  component: Single,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "하단에 고정되어 있는 버튼입니다.<br/>" +
          "최대 버튼 2개까지 사용할 수 있습니다.<br/>" +
          "버튼 컴포넌트를 사용해서 버튼에서 사용하는 props를 동일하게 사용할 수 있습니다.",
      },
    },
  },
  args: {
    children: "BottomCTA버튼",
    color: "primary",
    variant: "weak",
    size: "large",
  },
};
export default meta;

type Story = StoryObj<typeof Single>;

export const SingleButton: Story = {
  name: "싱글버튼",
  render: (args) => <BottomCTA.Single {...args} />,
};

export const DoubleCTA = () => (
  <BottomCTA.Double
    left="취소"
    right="확인"
    leftProps={{
      color: "danger",
      size: "large",
      variant: "fill",
      children: "취소",
    }}
    rightProps={{
      color: "primary",
      size: "large",
      variant: "fill",
      children: "확인",
    }}
  />
);

export const TODO = () => (
  <>
    애니메이션 효과 넣어볼 것. 아래에서 위로 올라오거나 밑으로 사라지는
    transition 넣어서
  </>
);
