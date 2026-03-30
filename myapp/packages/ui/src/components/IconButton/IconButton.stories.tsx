import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "`IconButton` 컴포넌트는 버튼에 아이콘과 텍스트가 함게 사용되거나 아이콘만 있는 경우를 나타냅니다.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      description: "버튼의 배경색을 조정합니다.",
      options: ["fill", "clear", "border"],
    },
    size: {
      control: { type: "radio" },
      description: "버튼의 사이즈를 결정합니다.",
      options: ["small", "medium", "large", "xlarge"],
    },
    iconSize: {
      control: { type: "radio" },
      description: "아이콘의 사이즈를 결정합니다.",
      options: ["small", "medium", "large", "xlarge"],
    },
    configuration: {
      control: { type: "radio" },
      description: "아이콘 버튼의 label 유무를 선택할 수 있습니다.",
      options: ["icon", "label-icon"],
    },
    icon: {
      control: false,
      description: "icon 모양을 넣어줍니다.",
    },
    label: {
      control: "text",
      description: "아이콘의 상태를 텍스트로 설명해줍니다.",
    },
    ariaLabel: {
      control: "text",
      description: "aria-label의 텍스트를 입력해줍니다.",
    },
    disabled: {
      control: "boolean",
      description: "버튼의 비활성화 상태를 나태닙니다.",
    },
  },
  args: {
    variant: "fill",
    size: "medium",
    iconSize: "medium",
    label: "알림",
    configuration: "icon",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
    >
      <g fill="#92969b">
        <path d="m15.466 19.466c0 1.855-1.563 3.418-3.418 3.418-1.953 0-3.418-1.563-3.418-3.418z" />
        <path d="m12 1.022c1.145 0 2.101.812 2.322 1.893 3.302.997 5.703 4.046 5.703 7.649v2.294s1.583 2.564 1.583 2.564c.634 1.027-.105 2.352-1.312 2.352h-8.295s-8.295 0-8.295 0c-1.207 0-1.946-1.324-1.312-2.352l1.583-2.564v-2.294c0-3.603 2.401-6.653 5.703-7.649.221-1.081 1.177-1.893 2.322-1.893z" />
      </g>
    </svg>
  );
};

export const Overview: Story = {
  render: (args) => <IconButton icon={<Icon />} {...args} />,
};

export const Configuration: Story = {
  args: {
    configuration: "icon",
    label: "알림",
  },
  render: (args) => (
    <>
      <IconButton
        ariaLabel="알림"
        size="medium"
        iconSize="medium"
        icon={<Icon />}
        {...args}
      />
    </>
  ),
};

export const Size = () => {
  return (
    <>
      <p> 버튼 사이즈와 이이콘 사이즈 맞추기를 권장.</p>

      <IconButton
        size="small"
        iconSize="small"
        icon={<Icon />}
        configuration="icon"
      />
      <div style={{ height: "8px" }}></div>
      <IconButton
        size="medium"
        iconSize="medium"
        icon={<Icon />}
        configuration="label-icon"
        label="알림"
      />
      <div style={{ height: "8px" }}></div>
      <IconButton
        size="large"
        iconSize="large"
        icon={<Icon />}
        configuration="label-icon"
        label="알림"
      />
      <div style={{ height: "8px" }}></div>
      <IconButton
        size="xlarge"
        iconSize="xlarge"
        icon={<Icon />}
        configuration="label-icon"
        label="알림"
      />
    </>
  );
};

export const Disabled = () => {
  return (
    <IconButton
      size="xlarge"
      iconSize="xlarge"
      icon={<Icon />}
      configuration="label-icon"
      disabled
    />
  );
};
