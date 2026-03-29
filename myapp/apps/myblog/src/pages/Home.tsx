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
        <Paragraph typography="t1" as="h1" fontWeight="bold" color="black">
          Frontend Study Blog
        </Paragraph>
        <Spacing y={16} />
        <Flex gap={8} direction="column" alignItems="start">
          <div>
            <Paragraph typography="sub2" color="gray700" as="p">
              직접 설계한 {""}
              <Button
                display="inline"
                variant="fill"
                color="text"
                size="medium"
                onClick={() => {
                  navigate(`https://celinejoo.github.io/monorepo/`);
                }}
              >
                디자인 시스템
              </Button>
              {""} 컴포넌트를 기반으로 구축한 기술 블로그입니다.
            </Paragraph>
          </div>
          <Paragraph typography="sub2" color="gray700">
            개인적인 학습 내용들을 기록하고자 합니다.
          </Paragraph>
          <Paragraph typography="sub2" color="gray500"></Paragraph>
          <Button
            display="inline"
            variant="fill"
            color="text"
            size="medium"
            onClick={() => {
              navigate(`https://celinejoo.github.io/monorepo/`);
            }}
          >
            포트폴리오 보러가기
          </Button>
        </Flex>

        <Spacing y={12} />

        <Spacing y={48} />

        <div style={{ width: "50%" }}>
          <Tab
            type="fixed"
            items={[
              { value: "전체보기", label: "전체보기" },
              { value: "자바스크립트", label: "자바스크립트" },
              { value: "프로젝트", label: "프로젝트" },
              { value: "others", label: "others" },
            ]}
          />
        </div>
        <Spacing y={48} />
        <ul>
          {posts &&
            posts?.map((item, key) => {
              return (
                <>
                  <List
                    as="li"
                    margin={24}
                    onClick={() => {
                      navigate(`/posts/${item.id}`);
                    }}
                    key={key}
                  >
                    <List.Contents title={item.title} subtitle={item.summary} />
                    <List.Trailing>
                      <>
                        <Paragraph typography="sub4" color="gray600">
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
                  <Border varient="full" height="1" />
                </>
              );
            })}
        </ul>
      </InnerSection>
    </>
  );
}

export default Home;
