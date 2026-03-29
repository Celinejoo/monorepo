import { Border, Button, Flex, List, Paragraph, Tab } from "@repo/ui";
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
        <Paragraph typography="t1" as="h1" textAlign="right" fontWeight="bold">
          Frontend Notes
        </Paragraph>
        <Spacing y={16} />
        <Paragraph typography="sub2" color="gray500" textAlign="right">
          디자인시스템을 활용하여 블로그를 직접 만들어보기
          <br /> 학습 내용 기록 블로그입니다.
          <br /> 개발 과정의 고민과 이유, 시도들을 남깁니다.
        </Paragraph>
        <Spacing y={4} />
        <Flex justifyContent="right">
          <Button variant="fill" size="small" color="text">
            이력서 보기
          </Button>
        </Flex>
        <Spacing y={16} />
        <div style={{ width: "50%", margin: " 0 auto" }}>
          <Tab
            type="fixed"
            items={[
              { value: "자바스크립트", label: "자바스크립트" },
              { value: "프로젝트", label: "프로젝트" },
              { value: "others", label: "others" },
            ]}
          />
        </div>
        <Spacing y={16} />
        <ul>
          {posts &&
            posts?.map((item, key) => {
              return (
                <>
                  <List
                    as="li"
                    padding="24"
                    margin={24}
                    onClick={() => {
                      navigate(`/posts/${item.id}`);
                    }}
                    key={key}
                  >
                    <List.Contents title={item.title} subtitle={item.summary} />
                    <List.Trailing>
                      <>
                        <Paragraph typography="sub3" color="gray700">
                          {item?.createdAt instanceof Timestamp
                            ? item?.createdAt
                                .toDate()
                                .toLocaleDateString("ko", {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                })
                            : item.createdAt}
                        </Paragraph>
                        {/* {!!user && (
                        <Flex justifyContent="end" gap={12}>
                          <Flex.Item>
                            <Button
                              variant="fill"
                              color="text"
                              size="small"
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/posts/edit/${item.id}`);
                              }}
                            >
                              수정하기
                            </Button>
                          </Flex.Item>
                          <Flex.Item>
                            <Button
                              variant="fill"
                              color="text"
                              size="small"
                              onClick={() => {
                                if (item.id) handleDelete(item.id);
                              }}
                            >
                              삭제하기
                            </Button>
                          </Flex.Item>
                        </Flex>
                      )} */}
                      </>
                    </List.Trailing>
                  </List>
                  <Border varient="padding24" height="1" />
                </>
              );
            })}
        </ul>
      </InnerSection>
    </>
  );
}

export default Home;
