import styled from "@emotion/styled";
import { Badge, CardContents, CardHeader, Flex, Paragraph } from "@repo/ui";
import { Spacing } from "../Spacing";

type PortfolioCardProps = {
  id: number;
  tag?: string;
  title: string;
  date?: string;
  summary?: string;
  desc?: string;
  role?: string[];
  skill?: string[];
  image?: string;
  buttonLabel?: string;
};

const CardWrap = styled.div`
  min-height: 450px;
  padding: 20px;
  border-radius: 24px;

  backdrop-filter: blur(20px);

  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }
`;
export const PortfolioImage = ({
  tag,
  title,
  summary,
  skill,
  image,
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
        <Paragraph typography="sub4" color="gray500">
          {tag}
        </Paragraph>
        <Spacing y={4} />
        <Paragraph typography="sub2" color="blue500" fontWeight="bold">
          {title}
        </Paragraph>
        <Spacing y={8} />
        <Paragraph typography="sub3" color="gray500">
          {summary}
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
        <Spacing y={8} />
      </CardContents>
    </CardWrap>
  );
};
