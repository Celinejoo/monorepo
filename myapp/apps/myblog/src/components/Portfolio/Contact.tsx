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
export const Contact = () => {
  return (
    <>
      <CardWrap>
        <Paragraph typography="sub1" fontWeight="bold" color="blue500">
          주현정 (JOO HYUN JUNG)
        </Paragraph>
        <Spacing y={4} />
        <Paragraph typography="sub3">joohj0509@gmail.com</Paragraph>
        <Spacing y={4} />
        <Paragraph typography="sub3">010 8651 1577</Paragraph>
        <Spacing y={16} />
        <Paragraph typography="sub2" fontWeight="bold">
          뭐라고적을까욤
        </Paragraph>
        <Paragraph typography="sub3">포트폴리오 만들기</Paragraph>
        <Paragraph typography="sub3">glass Effect</Paragraph>
        <Paragraph typography="sub3">애니메이션효과?</Paragraph>
        <Paragraph typography="sub3">아이콘추가</Paragraph>
        <Paragraph typography="sub3">제발ㅠ</Paragraph>
      </CardWrap>
    </>
  );
};
