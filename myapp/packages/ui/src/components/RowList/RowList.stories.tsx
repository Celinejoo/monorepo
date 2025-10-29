import type { Meta, StoryObj } from "@storybook/react";
import { RowList } from "./RowList";
import { Badges } from "./../Badges";
import { Typography } from "../Typography";
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
        left={<Typography typography="body">CARD</Typography>}
        contents={<RowList.Texts title="1위" subTitle="신한카드" />}
        right={<Badges label="신한" />}
        withArrow={true}
      />
      <RowList
        left={<Typography typography="body">CARD</Typography>}
        contents={<RowList.Texts title="2위" subTitle="롯데카드" />}
        right={<Badges label="LOTTE" />}
        withArrow={true}
      />
    </ul>
  ),
};
