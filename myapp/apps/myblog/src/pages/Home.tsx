import { Button, FlexLayout, ListItem, Tab, Typography } from "@repo/ui";
import { Spacing } from "../components/Spacing";
import { Header } from "../components/Header";
import { InnerSection } from "../components/InnerSection";
import { useGetPost } from "../hooks/useGetPost";
import { Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useDeletePost } from "../hooks/useDeletePost";

function Home() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { data: posts } = useGetPost();
  const { mutate: deletePost } = useDeletePost();

  const handleDelete = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const ok = window.confirm("삭제하시겠습니까?");
    if (ok) {
      deletePost(id);
    }
  };

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
                  <ListItem.Texts title={item.title} subtitle={item.summary} />
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
                    {!!user && (
                      <FlexLayout
                        justifyContent="end"
                        gap={12}
                        style={{ width: "100%" }}
                      >
                        <Button
                          variant="textButton"
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/posts/edit/${item.id}`);
                          }}
                        >
                          수정하기
                        </Button>
                        <Button
                          variant="textButton"
                          size="small"
                          onClick={() => {
                            if (item.id) handleDelete(item.id);
                          }}
                        >
                          삭제하기
                        </Button>
                      </FlexLayout>
                    )}
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
