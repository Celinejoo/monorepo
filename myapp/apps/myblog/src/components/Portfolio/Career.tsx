import { Paragraph } from "@repo/ui";
import { Spacing } from "../Spacing";

export const Career = () => {
  return (
    <>
      <Paragraph typography="t2" fontWeight="bold">
        Careers
      </Paragraph>
      <Spacing y={24} />

      <Paragraph typography="sub2" fontWeight="bold">
        카카오페이
      </Paragraph>
      <Paragraph typography="sub3">2023.11 - 2024.09 (11개월)</Paragraph>
      <Spacing y={8} />
      <Paragraph typography="sub3">
        보험허브파티 / 프론트엔드 어시스던트(인턴)
      </Paragraph>
      <Spacing y={8} />
      <Paragraph typography="sub3">
        카카오페이 보험의 중심인 보험 홈과 신규 서비스의 UI 개발 담당
      </Paragraph>
      <Spacing y={24} />
      <Paragraph typography="sub2" fontWeight="bold">
        퍼블리시
      </Paragraph>
      <Paragraph typography="sub3">2021.03 - 2023.09 (2년 7개월)</Paragraph>
      <Spacing y={8} />
      <Paragraph typography="sub3">IT 기술부 / 매니저</Paragraph>
      <Spacing y={8} />
      <Paragraph typography="sub3">
        퍼블리시 내부 프로젝트 UI 개발 담당.
      </Paragraph>
    </>
  );
};
