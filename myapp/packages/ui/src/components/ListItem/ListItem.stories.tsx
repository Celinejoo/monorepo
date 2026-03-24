import type { Meta, StoryObj } from "@storybook/react";
import { List } from "./Listitem";
import { Badge } from "../Badge";
import { Paragraph } from "../Paragraph";

const meta: Meta<typeof List> = {
  title: "Components/ListItem",
  tags: ["autodocs"],
  component: List,
};
export default meta;

type Story = StoryObj<typeof List>;

export const Defalut: Story = {
  render: () => (
    <ul>
      <List showDivider padding="24" margin={16} gap={12} as="li">
        <List.Leading>
          <Paragraph typography="sub3">{`엄청나게 
          긴 왼쪽여백의 공간을 
          차지함ㄴ다면 `}</Paragraph>
        </List.Leading>
        <List.Contents title="제목" subtitle="2026.03.24"></List.Contents>
        <List.Trailing>
          <Badge size="small" background="green500">
            <Paragraph color="green100" typography="sub4">
              뱃지
            </Paragraph>
          </Badge>
        </List.Trailing>
      </List>
      <List padding="24" margin={16}>
        <List.Leading>
          <Paragraph typography="sub1">음...!</Paragraph>
        </List.Leading>
        <List.Contents title="제목" subtitle="2026.03.24"></List.Contents>
        <List.Trailing>흠...</List.Trailing>
      </List>
    </ul>
  ),
};
