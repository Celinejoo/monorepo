import { Contents, List, Paragraph } from "@repo/ui";
import { projectData } from "../../data/ProjectList";
import { Spacing } from "../Spacing";
import styled from "@emotion/styled";

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-auto-flow: column;
gap: 32px;
}
`;

export const PortFolioList = () => {
  return (
    <>
      <Paragraph typography="t2" color="gray700" fontWeight="bold">
        Projects
        <Paragraph typography="sub3" color="gray500" as="span">
          *최신순 정렬
        </Paragraph>
      </Paragraph>
      <Spacing y={24} />
      <Grid>
        {projectData.map((yearData) => (
          <div key={yearData.year}>
            <Paragraph typography="sub1" color="blue500" fontWeight="semibold">
              {yearData.year}
            </Paragraph>
            <ul>
              {yearData.projects.map((project) => (
                <>
                  <List as="li" gap={4} margin={16}>
                    <Contents title={project.title} subtitle={project.period} />
                  </List>
                </>
              ))}
            </ul>
          </div>
        ))}
      </Grid>
    </>
  );
};
