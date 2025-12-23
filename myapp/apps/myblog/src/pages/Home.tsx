import styled from "@emotion/styled";
import { Button, FlexLayout, Tab, Typography } from "@repo/ui";

function Home() {
  return (
    <InnerSection>
      <Typography typography="headingL" as="h1" textAlign="right">
        Frontend Notes
      </Typography>
      <div style={{ marginBottom: 16 }}></div>
      <Typography typography="bodyS" color="textSubtle" textAlign="right">
        학습 내용 기록 블로그를 직접 만들어 봅시다.
        <br /> 개발 과정의 고민과 이유, 시도들을 남깁니다.
      </Typography>
      <div style={{ marginBottom: 4 }}></div>

      <FlexLayout justifyContent="right" style={{ marginRight: -8 }}>
        <Button variant="textButton" size="small">
          이력서 보기
        </Button>
      </FlexLayout>

      <div style={{ marginBottom: 16 }}></div>
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
    </InnerSection>
  );
}

const InnerSection = styled.div`
  margin: 60px 185px;
`;
export default Home;
