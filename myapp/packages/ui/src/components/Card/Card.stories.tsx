import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Paragraph } from "../Paragraph";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    outlined: true,
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const 기본카드: Story = {
  args: {
    outlined: false,
  },
  render: (args) => (
    <Card {...args} background="pink100">
      <Card.Header>
        <Paragraph typography="sub1">카드의 제목을 넣어줍니다.</Paragraph>
      </Card.Header>
      <Card.Contents>
        <Paragraph typography="sub2">보더가 없는 카드 입니다.</Paragraph>
      </Card.Contents>
    </Card>
  ),
};

export const 보더카드: Story = {
  args: {
    outlined: true,
  },
  render: (args) => (
    <Card {...args}>
      <Card.Header>
        <Paragraph typography="sub1">카드의 제목</Paragraph>
      </Card.Header>
      <Card.Contents>
        <Paragraph typography="sub3">보더가 있는 카드 입니다.</Paragraph>
        <Paragraph typography="sub3">
          {`TO DO : 보더 컬러도 변경할 수 있게 함수를 적용해야함. 
          이미지도 넣을 수 있는지 없는지 확인
          
          `}
        </Paragraph>
        <image
          width={12}
          height="12px"
          style={{
            display: "block",
            width: "24px",
            height: "24px",
            background: "tomato",
          }}
        />
      </Card.Contents>
    </Card>
  ),
};
