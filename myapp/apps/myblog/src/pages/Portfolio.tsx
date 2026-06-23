import { Paragraph } from "@repo/ui";

import styled from "@emotion/styled";
import { Spacing } from "../components/Spacing";
import { data } from "../data/portfolioData";
import { PortFolioList } from "../components/Portfolio/PortFolioList";
import { Contact } from "../components/Portfolio/Contact";
import { useEffect } from "react";
import { PortfolioImage } from "../components/Portfolio/PortfolioImage";

import { WrapComponent } from "../components/Portfolio/Wrap";
import { Link } from "react-router";
import { Career } from "../components/Portfolio/Career";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

function Portfolio() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");

    return () => {
      document.documentElement.removeAttribute("data-theme");
    };
  }, []);

  return (
    <WrapComponent>
      <Paragraph typography="t1" color="gray700" fontWeight="bold">
        Portfolio
      </Paragraph>
      <Spacing y={24} />
      <Contact />
      <Spacing y={48} />
      <Career />
      <Spacing y={48} />
      <PortFolioList />
      <Spacing y={48} />
      <Paragraph typography="t2" color="gray700" fontWeight="bold">
        Projects 상세보기
      </Paragraph>
      <Spacing y={24} />

      <Grid>
        {data.map((item) => (
          <Link
            to={`/portfolio/${item.id}`}
            style={{ textDecoration: "none" }}
            key={item.id}
          >
            <PortfolioImage
              id={item.id}
              tag={item.tag}
              summary={item.summary}
              title={item.title}
              skill={item.skill}
              image={item.image}
            />
          </Link>
        ))}
      </Grid>
    </WrapComponent>
  );
}
export default Portfolio;
