import type { Meta, StoryObj } from "@storybook/react";
import { Border } from "./Border";

const meta: Meta<typeof Border> = {
  title: "Components/Border",
  component: Border,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "'Border' 컴포넌트는 선을 나타냅니다. 요소와 요소에서의 구분이 필요할 때 사용합니다.",
      },
    },
  },
  args: {
    height: "1",
    varient: "full",
  },

  argTypes: {
    height: {
      control: "radio",
      description:
        "굵기를 선택할 수 있어요, heigth16을 선택하면 굵게 표현됩니다.",
      options: ["1", "16"],
    },

    varient: {
      control: "radio",
      description:
        "양 옆의 간격을 선택할 수 있어요, padding24를 사용하면 왼쪽 오른쪽 여백이 24px 적용됩니다.",
      options: ["full", "padding24"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Border>;

export const Default: Story = {
  render: (args) => <Border {...args} />,
};

export const LightBorder = () => (
  <>
    <Border height="1" />
  </>
);

export const HeightBorder = () => (
  <>
    <Border height="16" />
  </>
);

export const Padding24 = () => (
  <>
    <Border height="16" varient="padding24" />
    <div style={{ marginBottom: "16px" }}></div>
    <Border height="1" varient="padding24" />
  </>
);

export const Full = () => (
  <>
    <Border height="16" varient="full" />
    <div style={{ marginBottom: "16px" }}></div>
    <Border height="1" varient="full" />
  </>
);
