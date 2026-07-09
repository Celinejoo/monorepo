import styled from "@emotion/styled";
import { Badge, CardContents, CardHeader, Flex, Paragraph } from "@repo/ui";
import { Spacing } from "../Spacing";
import { keyframes } from "@emotion/react";

type PortfolioCardProps = {
  id: number | string;
  tag?: string;
  title: string;
  date?: string;
  summary?: string;
  contribution?: string;
  desc?: string;
  role?: string[];
  skill?: string[];
  image?: string;
  buttonLabel?: string;
};

const rotateBorder = keyframes`
  to {
      --angle: 360deg;
    }
`;

const CardWrap = styled.div`
  @property --angle {
    syntax: "<angle>";
    inherits: false;
    initial-value: 0deg;
  }

  --angle: 0deg;

  min-height: 520px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;

  backdrop-filter: blur(20px);

  &:hover {
    transform: translateY(-4px);
    background:
      linear-gradient(#020617, #020617) padding-box,
      conic-gradient(
        from var(--angle),
        transparent 0deg,
        transparent 300deg,
        #4299e1 330deg,
        transparent 360deg
      );
    animation: ${rotateBorder} 4s linear infinite;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }
`;

export const PortfolioImage = ({
  tag,
  title,
  summary,
  skill,
  image,
  contribution,
}: PortfolioCardProps) => {
  const skillColors: Record<
    string,
    {
      background: "cyan100" | "blue100" | "pink100" | "green500" | "pink600";
      color: "pink700" | "cyan700" | "blue700" | "pink600" | "pink100";
    }
  > = {
    React: { background: "cyan100", color: "cyan700" },
    TypeScript: {
      background: "blue100",
      color: "blue700",
    },
    Emotion: {
      background: "pink100",
      color: "pink700",
    },
    Storybook: {
      background: "pink600",
      color: "pink100",
    },
  };
  return (
    <CardWrap>
      <CardHeader>
        <Paragraph typography="sub3" color="gray500">
          {tag}
        </Paragraph>
        <Spacing y={4} />
        <Paragraph typography="sub1" color="blue500" fontWeight="bold">
          {title}
        </Paragraph>
        <Spacing y={4} />
        <Paragraph typography="sub2" color="gray700">
          {summary}
        </Paragraph>
        <Spacing y={8} />
        <Paragraph typography="sub2" color="blue600" fontWeight="bold">
          기여도
        </Paragraph>
        <Paragraph typography="sub2" color="gray700">
          {contribution}
        </Paragraph>
      </CardHeader>
      <CardContents>
        <img src={image} alt="프로젝트AI" width="100%" height="auto" />
        <Spacing y={8} />
        <Flex gap={4}>
          {skill?.map((name) => {
            const color = skillColors[name] ?? {
              background: "green500",
              color: "white0",
            };
            return (
              <Badge key={name} background={color.background}>
                <Paragraph typography="sub4" color={color.color}>
                  {name}
                </Paragraph>
              </Badge>
            );
          })}
        </Flex>
      </CardContents>
    </CardWrap>
  );
};
