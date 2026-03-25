import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";
import { useState } from "react";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "input 컴포넌트",
      },
    },
  },
  args: {
    variant: "outlined",
    label: "label",
    error: false,
    helperText: "helperText",
  },
  argTypes: {
    variant: {
      control: "radio",
      description: "input 모양을 결정합니다.",
      options: ["outlined", "filled"],
    },
    error: {
      control: "boolean",
    },
    label: {
      description: "input label을 입력합니다.",
    },
    helperText: {
      description: "error가 발생했을 때 텍스트가 나옵니다.",
    },
  },
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  render: (args) => (
    <TextField {...args} type="password" placeholder="placeholder" />
  ),
};

export const Filled: Story = {
  render: () => (
    <>
      <TextField
        label="label"
        variant="filled"
        type="password"
        placeholder="placeholder"
        error={false}
      />
    </>
  ),
};

export const Outlined: Story = {
  render: () => (
    <>
      <TextField
        label="label"
        variant="outlined"
        type="password"
        placeholder="placeholder"
        error={false}
      />
    </>
  ),
};

export const Error = () => {
  const [boxValue, setBoxValue] = useState("");
  const errorMessage = "3글자 미만으로 입력해주세요.";

  const handleError = (value: string) => {
    return value.length > 2;
  };

  return (
    <>
      <TextField
        variant="outlined"
        label="비밀번호"
        type="password"
        placeholder="placeholder"
        error={handleError(boxValue)}
        helperText={errorMessage}
        value={boxValue}
        onChange={(e) => setBoxValue(e.target.value)}
      />
    </>
  );
};

export const TODO = () => <p> leading Icon, trailing Icon 추가</p>;
