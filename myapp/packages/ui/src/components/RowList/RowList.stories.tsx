import type { Meta, StoryObj } from "@storybook/react";
import { RowList } from "./RowList";

import { Paragraph } from "../Paragraph";
import { Badge } from "../Badge";
const meta: Meta<typeof RowList> = {
  title: "Components/RowList",
  component: RowList,
};
export default meta;

type Story = StoryObj<typeof RowList>;

export const Default: Story = {
  render: () => (
    <ul>
      <RowList
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
        withArrow={true}
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
        withArrow={true}
      />
      <RowList
        contents={<RowList.Texts title="제목만 사용하기" />}
        withArrow={true}
      />
      <RowList
        contents={
          <RowList.Texts title="assets 사용해서 arrow 변경도 해야될 거 같음ㅠ" />
        }
        withArrow={true}
      />
    </ul>
  ),
};
