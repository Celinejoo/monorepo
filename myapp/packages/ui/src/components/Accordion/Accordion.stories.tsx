import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";
import type { AccordionBaseProps, AccordionHeaderProps } from "./Accordion";
import { Paragraph } from "../Paragraph";

type AccordionStoryArgs = Pick<AccordionBaseProps, "defaultOpen"> &
  Pick<AccordionHeaderProps, "prefix" | "title"> & {
    content: string;
  };

const meta: Meta<AccordionStoryArgs> = {
  title: "Components/Accordion",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "한 페이지에서 관련 있는 여러 콘텐츠 섹션을 확인할 수 있도록 하는 컴포넌트로, 콘텐츠 섹션의 헤더 목록이 수직으로 쌓여 있는 형태로 표현됩니다. 하위 콘텐츠 섹션을 표시하거나 숨길 수 있습니다.",
      },
    },
  },
  argTypes: {
    defaultOpen: {
      control: "boolean",
      description: "초기 열림 상태를 설정합니다.",
    },
    prefix: {
      control: "text",
      description: "헤더 왼쪽에 표시되는 prefix 요소입니다.",
    },
    title: {
      control: "text",
      description: "아코디언 헤더 제목입니다.",
    },
    content: {
      control: "text",
      description:
        "아코디언 본문 내용입니다. children 속성으로 Paragraph 컴포넌트 사용이 가능합니다.",
    },
  },
  args: {
    defaultOpen: false,
    prefix: "Q",
    title: "아코디언 헤더에는 보통 질문이 들어갑니다.",
    content: "아코디언의 컨텐츠에는 보통 답변이 들어갑니다.",
  },
};

export default meta;

type Story = StoryObj<AccordionStoryArgs>;

export const Overview: Story = {
  render: ({ defaultOpen, prefix, title, content }) => (
    <Accordion defaultOpen={defaultOpen}>
      <Accordion.Header title={title} prefix={prefix || undefined} />
      <Accordion.Content>
        <Paragraph typography="sub3">{content}</Paragraph>
      </Accordion.Content>
    </Accordion>
  ),
};

export const WithoutPrefix: Story = {
  args: {
    defaultOpen: false,
    prefix: "",
    title: "prefix 없이 사용하는 아코디언",
    content: "prefix가 없어도 정상적으로 동작합니다.",
  },
  render: ({ defaultOpen, prefix, title, content }) => (
    <Accordion defaultOpen={defaultOpen}>
      <Accordion.Header title={title} prefix={prefix || undefined} />
      <Accordion.Content>
        <Paragraph typography="sub3">{content}</Paragraph>
      </Accordion.Content>
    </Accordion>
  ),
};
