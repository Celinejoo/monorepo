import type { Meta, StoryObj } from "@storybook/react";
import { RowList } from "./RowList";
import { Paragraph } from "../Paragraph";
import { Badge } from "../Badge";

const meta: Meta<typeof RowList> = {
  title: "Components/RowList",
  component: RowList,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "`RowList` 컴포넌트는 좌측 요소, 텍스트 영역, 우측 요소를 한 줄로 배치하는 리스트 아이템 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    left: {
      control: false,
      description: "좌측에 렌더링할 요소입니다.",
    },
    contents: {
      control: false,
      description: "중앙 텍스트 영역입니다. 보통 `RowList.Texts`를 사용합니다.",
    },
    right: {
      control: false,
      description: "우측에 렌더링할 요소입니다.",
    },
    withArrow: {
      control: "boolean",
      description: "우측 화살표 표시 여부를 설정합니다.",
    },
  },
  args: {
    withArrow: true,
  },
};

export default meta;
type Story = StoryObj<typeof RowList>;

export const Default: Story = {
  render: (args) => (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      <RowList
        {...args}
        left={
          <Badge background="green500" size="large">
            <Paragraph color="green100" typography="sub4">
              태그
            </Paragraph>
          </Badge>
        }
        contents={<RowList.Texts title="내 자산" />}
        right={
          <Paragraph color="gray400" typography="sub4">
            계좌 대출 증권 카드 포인트
          </Paragraph>
        }
        withArrow
      />
      <RowList
        left={
          <Badge background="green500" size="large">
            <Paragraph color="green100" typography="sub4">
              태그
            </Paragraph>
          </Badge>
        }
        contents={
          <RowList.Texts title="일상" subTitle="내 일상을 소개합니다." />
        }
        right={
          <Paragraph color="gray400" typography="sub4">
            집 취미 여행 반려동물
          </Paragraph>
        }
        withArrow
      />
      <RowList contents={<RowList.Texts title="제목만 사용하기" />} withArrow />
      <RowList
        contents={
          <RowList.Texts title="assets 사용해서 arrow 변경도 해야될 거 같음ㅠ" />
        }
        withArrow
      />
    </ul>
  ),
};

export const WithSubtitle: Story = {
  render: (args) => (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      <RowList
        {...args}
        left={
          <Badge background="green500" size="large">
            <Paragraph color="green100" typography="sub4">
              태그
            </Paragraph>
          </Badge>
        }
        contents={
          <RowList.Texts title="일상" subTitle="내 일상을 소개합니다." />
        }
        right={
          <Paragraph color="gray400" typography="sub4">
            집 취미 여행 반려동물
          </Paragraph>
        }
      />
    </ul>
  ),
};

export const WithoutSubtitle: Story = {
  render: (args) => (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      <RowList {...args} contents={<RowList.Texts title="제목만 사용하기" />} />
    </ul>
  ),
};

export const WithoutArrow: Story = {
  args: {
    withArrow: false,
  },
  render: (args) => (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      <RowList
        {...args}
        left={
          <Badge background="green500" size="large">
            <Paragraph color="green100" typography="sub4">
              태그
            </Paragraph>
          </Badge>
        }
        contents={
          <RowList.Texts title="화살표 없이 사용하기" subTitle="옵션 예시" />
        }
        right={
          <Paragraph color="gray400" typography="sub4">
            보조 텍스트
          </Paragraph>
        }
      />
    </ul>
  ),
};
