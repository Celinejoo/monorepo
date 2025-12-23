import type { Meta, StoryObj } from "@storybook/react";
import { ListItem } from "./Listitem";
import { Chip } from "../Chip";
import { Typography } from "../Typography";

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
        showDivider
        contents={
          <ListItem.Texts title="제목" subtitle="서브타이틀"></ListItem.Texts>
        }
        trailing={
          <Typography typography="caption" color="textSubtle">
            날짜
          </Typography>
        }
      />
    </>
  ),
};
