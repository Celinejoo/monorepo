import { Button, FlexLayout, ListItem, Tab, Typography } from "@repo/ui";
import { Spacing } from "../components/Spacing";
import { Header } from "../components/Header";
import { InnerSection } from "../components/InnerSection";
import { useGetPost } from "../hooks/useGetPost";
import { Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  const { data: posts } = useGetPost();

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
        {posts &&
          posts?.map((item, key) => {
            return (
              <ListItem
                onClick={() => {
                  navigate(`/posts/${item.id}`);
                }}
                key={key}
                spacing={8}
                showDivider
                contents={
                  <ListItem.Texts
                    title={item.title}
                    subtitle={item.summary}
                  ></ListItem.Texts>
                }
                trailing={
                  <>
                    <Typography typography="caption" color="textSubtle">
                      {item?.createdAt instanceof Timestamp
                        ? item?.createdAt.toDate().toLocaleDateString("ko", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          })
                        : item.createdAt}
                    </Typography>
                  </>
                }
              />
            );
          })}
      </InnerSection>
    </>
  );
}

export default Home;
