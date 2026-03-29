import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      action: "clicked",
      description: "actions 패널에서 확인 가능합니다.",
    },

    as: {
      control: "radio",
      description: "카드의 HTML 태그를 변경합니다.",
      options: ["div", "li"],
    },
    outlined: {
      control: "boolean",
      description: "border 유무를 선택합니다.",
    },
    background: {
      control: "select",
      description:
        "카드의 배경 색을 결정합니다. border 컬러 변경이 지원 되지 않아 outlined false 해주세요.",
      options: ["gray100", "gray200", "gray300", "gray400", "white"],
    },
    children: {
      control: false,
    },
  },
  args: {
    as: "div",
    outlined: false,
    background: "gray100",
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Overview: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header>카드 헤더</Card.Header>
      <Card.Contents>기본 카드 콘텐츠입니다.</Card.Contents>
    </Card>
  ),
};

export const Outlined: Story = {
  args: {
    outlined: true,
  },
  render: (args) => (
    <Card {...args}>
      <Card.Header>Outlined Card</Card.Header>
      <Card.Contents>outlined 옵션이 적용된 카드입니다.</Card.Contents>
    </Card>
  ),
};

export const Clickable: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header>클릭 여부의 확인</Card.Header>
      <Card.Contents>
        클릭하면 Actions 패널에서 이벤트를 확인할 수 있습니다.
      </Card.Contents>
    </Card>
  ),
};

export const ListCard: Story = {
  args: {
    as: "li",
  },
  render: (args) => (
    <ul>
      <Card {...args}>
        <Card.Header>List Item Card</Card.Header>
        <Card.Contents>as="li"로 렌더링한 예시입니다.</Card.Contents>
      </Card>
      <div style={{ marginTop: "8px" }}></div>
      <Card {...args}>
        <Card.Header>List Item Card</Card.Header>
        <Card.Contents>as="li"로 렌더링한 예시입니다.</Card.Contents>
      </Card>
    </ul>
  ),
};
