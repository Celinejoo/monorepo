import styled from "@emotion/styled";
import { Button, FlexLayout, ListItem, Tab, Typography } from "@repo/ui";
import { Spacing } from "../components/Spacing";
import { Header } from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <InnerSection>
        <Typography typography="headingL" as="h1" textAlign="right">
          Frontend Notes
        </Typography>
        <Spacing y={16} />
        <Typography typography="bodyS" color="textSubtle" textAlign="right">
          학습 내용 기록 블로그를 직접 만들어 봅시다.
          <br /> 개발 과정의 고민과 이유, 시도들을 남깁니다.
        </Typography>
        <Spacing y={4} />
        <FlexLayout justifyContent="right" style={{ marginRight: -8 }}>
          <Button variant="textButton" size="small">
            이력서 보기
          </Button>
        </FlexLayout>

        <Spacing y={16} />
        <FlexLayout justifyContent="center">
          <Tab
            type="fixed"
            items={[
              { value: "자바스크립트", label: "자바스크립트" },
              { value: "프로젝트", label: "프로젝트" },
              { value: "others", label: "others" },
            ]}
          />
        </FlexLayout>
        <ListItem
          spacing={8}
          showDivider
          contents={
            <ListItem.Texts
              title="데이터타입"
              subtitle="데이터타입은 무엇인가요?"
            ></ListItem.Texts>
          }
          trailing={
            <>
              <Typography typography="caption" color="textSubtle">
                2025.12.23
              </Typography>
            </>
          }
        />
        <ListItem
          spacing={8}
          showDivider
          contents={
            <ListItem.Texts title="제목" subtitle="서브타이틀"></ListItem.Texts>
          }
          trailing={
            <>
              <Typography typography="caption" color="textSubtle">
                날짜
              </Typography>
            </>
          }
        />
      </InnerSection>
    </>
  );
}

const InnerSection = styled.div`
  margin: 60px 185px;
`;
export default Home;
