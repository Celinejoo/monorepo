import styled from "@emotion/styled";

const Wrap = styled.div`
  overflow: hidden;
  min-height: 100vh;
  padding: 5%;
  box-sizing: border-box;

  background: radial-gradient(
      circle at 20% 10%,
      rgba(99, 102, 241, 0.35),
      transparent 28%
    ),
    radial-gradient(
      circle at 80% 30%,
      rgba(34, 211, 238, 0.22),
      transparent 30%
    ),
    radial-gradient(
      circle at 50% 90%,
      rgba(236, 72, 153, 0.16),
      transparent 28%
    ),
    linear-gradient(180deg, rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0)),
    #020617;
`;

export const WrapComponent = ({ children }: { children: React.ReactNode }) => {
  return <Wrap>{children}</Wrap>;
};
