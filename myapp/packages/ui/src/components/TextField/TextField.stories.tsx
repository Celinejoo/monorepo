import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";
import { useState } from "react";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const Defalut: Story = {
  render: () => (
    <>
      <TextField
        label="비밀번호"
        type="password"
        placeholder="placeholder"
        error={false}
        helperText="req"
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
    <TextField
      label="비밀번호"
      type="password"
      placeholder="placeholder"
      error={handleError(boxValue)}
      helperText={errorMessage}
      value={boxValue}
      onChange={(e) => setBoxValue(e.target.value)}
    />
  );
};
