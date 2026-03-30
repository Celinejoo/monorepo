import { Badge, Border, Button, Flex, List, Paragraph, Tab } from "@repo/ui";
import { Spacing } from "../components/Spacing";
import { Header } from "../components/Header";
import { InnerSection } from "../components/InnerSection";
import { useGetPost } from "../hooks/useGetPost";
import { Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router";
import { useState } from "react";

export type TabType = "ALL" | "자바스크립트" | "프로젝트" | "OTHERS";

// eslint-disable-next-line react-refresh/only-export-components
export const TabItems: TabType[] = [
  "ALL",
  "자바스크립트",
  "프로젝트",
  "OTHERS",
];

function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("ALL");
  const navigate = useNavigate();
  const { data: posts } = useGetPost();

  const TabitemsOptions = TabItems.map((item) => ({
    label: item,
    value: item,
  }));

  const filteredPosts =
    activeTab === "ALL"
      ? posts
      : posts?.filter((post) => post.category === activeTab);
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
              navigate(
                `https://indigo-andesaurus-e0c.notion.site/Portfolio-1c809d179e1080fa95aeecabf67d7978?pvs=73/`,
              );
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
            defaultValue={activeTab}
            items={TabitemsOptions}
            onChange={(value) => setActiveTab(value as TabType)}
          />
        </div>
        <Spacing y={24} />
        <ul>
          {posts &&
            filteredPosts?.map((item) => {
              const BadgeColor =
                item.category === "자바스크립트"
                  ? "green500"
                  : item.category === "프로젝트"
                    ? "blue500"
                    : "pink500";
              return (
                <>
                  <List
                    as="li"
                    margin={24}
                    onClick={() => {
                      navigate(`/posts/${item.id}`);
                    }}
                    key={item.id}
                  >
                    <List.Leading>
                      <Badge background={BadgeColor} size="small">
                        <Paragraph typography="sub4" color="white0">
                          {item.category}
                        </Paragraph>
                      </Badge>
                    </List.Leading>
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
