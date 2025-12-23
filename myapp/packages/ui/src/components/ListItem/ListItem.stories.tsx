import type { Meta, StoryObj } from "@storybook/react";
import { ListItem } from "./Listitem";
import { Button } from "../Button";
import { Typography } from "../Typography";
import { FlexLayout } from "../FlexLayout";

const meta: Meta<typeof ListItem> = {
  title: "Components/ListItem",
  component: ListItem,
};
export default meta;

type Story = StoryObj<typeof ListItem>;

export const Defalut: Story = {
  render: () => (
    <>
      <ListItem
        showDivider
        leading={<img width={120} height={120}></img>}
        contents={
          <ListItem.Texts title="제목" subtitle="서브타이틀"></ListItem.Texts>
        }
        trailing={
          <Typography typography="caption" color="textSubtle">
            날짜
          </Typography>
        }
      />
      <ListItem
        spacing={4}
        showDivider
        contents={
          <ListItem.Texts title="제목" subtitle="서브타이틀"></ListItem.Texts>
        }
        trailing={
          <>
            <Typography typography="caption" color="textSubtle">
              날짜
            </Typography>
            <FlexLayout justifyContent="end" style={{ width: "100%" }} gap={4}>
              <Button variant="textButton" size="small">
                수정
              </Button>
              <Button variant="textButton" size="small">
                삭제
              </Button>
            </FlexLayout>
          </>
        }
      />
    </>
  ),
};
