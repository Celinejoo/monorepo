import { Link, useParams } from "react-router";
import { data } from "../../data/portfolioData";
import { useEffect } from "react";

import { Badge, Button, Flex, Paragraph } from "@repo/ui";
import { Spacing } from "../../components/Spacing";
import { WrapComponent } from "../../components/Portfolio/Wrap";

export const ProjectDetail = () => {
  const { id } = useParams();

  const project = data.find((item) => item.id === id || item.id === Number(id));

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");

    return () => {
      document.documentElement.removeAttribute("data-theme");
    };
  }, []);

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  const skillColors: Record<
    string,
    {
      background:
        | "cyan100"
        | "blue100"
        | "pink100"
        | "green500"
        | "pink600"
        | "white0";
      color:
        | "pink700"
        | "cyan700"
        | "blue700"
        | "pink600"
        | "pink100"
        | "black";
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
    Recoil: {
      background: "white0",
      color: "black",
    },
  };
  return (
    <WrapComponent>
      <Paragraph typography="t2" color="blue500" fontWeight="bold">
        {project.title}
      </Paragraph>
      <Spacing y={8} />
      {project.date && (
        <>
          <Paragraph typography="sub3" color="gray500">
            {project.date}
          </Paragraph>
          <Spacing y={16} />
        </>
      )}
      {project.desc && (
        <>
          <Paragraph typography="sub2" color="gray600">
            {project.desc}
          </Paragraph>
          <Spacing y={16} />
        </>
      )}
      <Paragraph typography="sub1" color="blue600" fontWeight="bold">
        구현화면
      </Paragraph>
      <Spacing y={16} />
      {project.link && project.buttonLabel ? (
        <Link to={project.link} target="_blank">
          <Button variant="fill" size="small" color="primary">
            {project.buttonLabel}
          </Button>
        </Link>
      ) : null}
      <Spacing y={16} />
      {project.images && (
        <Flex wrap="wrap" justifyContent="center" gap={16}>
          {project.images?.map((item) => (
            <img src={item} alt="구현된 화면" width="50%" />
          ))}
        </Flex>
      )}
      <Paragraph typography="sub1" color="blue500" fontWeight="bold">
        기여한 부분
      </Paragraph>
      <Spacing y={16} />

      {project.role?.map((role) => (
        <>
          <div>
            <Paragraph typography="sub2" color="blue400" fontWeight="semibold">
              {role.category}
            </Paragraph>
            <Spacing y={4} />
            {role.details.map((detail) => (
              <>
                <Paragraph typography="sub3" color="gray600">
                  {detail}
                </Paragraph>
                <Spacing y={4} />
              </>
            ))}
          </div>
          <Spacing y={8} />
        </>
      ))}

      <Spacing y={16} />
      <Paragraph typography="sub1" color="blue500" fontWeight="bold">
        Skills
      </Paragraph>
      <Spacing y={16} />
      <Flex gap={4}>
        {project.skill?.map((name) => {
          const color = skillColors[name] ?? {
            background: "green500",
            color: "white0",
          };
          return (
            <Badge key={name} background={color.background} size="large">
              <Paragraph typography="sub4" color={color.color}>
                {name}
              </Paragraph>
            </Badge>
          );
        })}
      </Flex>
    </WrapComponent>
  );
};
