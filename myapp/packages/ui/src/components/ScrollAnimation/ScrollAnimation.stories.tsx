import { Meta, StoryObj } from "@storybook/react";
import { ScrollAnimation } from "./ScrollAnimation";

const meta: Meta<typeof ScrollAnimation> = {
  title: "Components/ScrollAnimation",
  component: ScrollAnimation,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "`ScrollAnimation` 컴포넌트는 사용자가 페이지를 스크롤할 때 그 위치나 진행도에 맞춰 애니메이션이 동작하는 컴포넌트입니다. ",
      },
    },
  },
  argTypes: {
    background: {
      control: "select",
      description: "스크롤 애니메이션의 배경을 선택할 수 있습니다.",
      options: ["gray500", "blue500", "red500", "pink500"],
    },
  },
  args: {
    background: "blue500",
  },
};
export default meta;

type Story = StoryObj<typeof ScrollAnimation>;

export const Overview: Story = {
  render: (args) => (
    <div style={{ height: "1000px" }}>
      스크롤을 해보세요.
      <ScrollAnimation {...args} />
    </div>
  ),
};
