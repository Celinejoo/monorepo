import styled from "@emotion/styled";
import { Paragraph } from "@repo/ui";
import { Spacing } from "../Spacing";

const CardWrap = styled.div`
  padding: 32px;
  border-radius: 28px;

  background: linear-gradient(
    135deg,
    rgba(255,255,255,0.12),
    rgba(255,255,255,0.04)
  );
  border: 1px solid rgba(255,255,255,0.16);

  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);

  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.18),
    0 24px 80px rgba(0,0,0,0.28);
}
`;

const Text: string[] = [
  "웹 표준과 웹 접근성을 고려한 시멘틱 마크업을 기반으로 사용자 중심의 UI를 구현합니다.",
  "웹 표준과 크로스 브라우징을 고려하여 다양한 브라우저 환경에서 일관된 사용자 경험을 제공합니다",
  "다양한 해상도에 대응하는 반응형 UI를 구현하여 사용자 경험을 개선합니다.",
  "기획과 Figma 기반의 디자인의 의도를 파악하고 CSS를 활용해 꼼꼼하고 정확하게 구현합니다.",
  "단순한 화면 구현이 아닌 서비스에 대한 이해와 데이터 흐름과 비즈니스 로직을 고려한 화면 구현을 합니다.",
  "React,Typescript 환경에서 UI 컴포넌트 개발 시 확장성과 재사용을 고려하여 인터페이스 설계를 하고 있습니다.",
  "Jira·Slack 등의 협업 도구를 활용하여 기획, 디자인, 백엔드, QA와 협업한 경험이 있습니다.",
  "Git 기반의 형상관리 및 협업 경험을 보유하고 있으며, 코드 리뷰를 통해 코드 품질 향상과 일관된 개발 문화를 실천합니다.",
];

export const Contact = () => {
  return (
    <>
      <CardWrap>
        <Paragraph typography="sub1" fontWeight="bold" color="blue500">
          주현정 (JOO HYUN JUNG)
        </Paragraph>
        <Spacing y={4} />
        <Paragraph typography="sub3">
          <a
            href="mailto:example@email.com"
            style={{ color: `var(--color-gray-700)` }}
          >
            joohj0509@gmail.com
          </a>
        </Paragraph>
        <Spacing y={4} />
        <Paragraph typography="sub3">010 8651 1577</Paragraph>
        <Spacing y={16} />
        <Paragraph typography="sub2" color="blue400" fontWeight="bold">
          간단소개
        </Paragraph>
        <Spacing y={8} />
        {Text.map((item: string) => (
          <>
            <Paragraph typography="sub2">{item}</Paragraph>
            <Spacing y={4} />
          </>
        ))}
      </CardWrap>
    </>
  );
};
