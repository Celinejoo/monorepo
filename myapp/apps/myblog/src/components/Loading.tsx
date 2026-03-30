import styled from "@emotion/styled";
import { Spinner } from "@repo/ui";

export const Loading = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const LoadingPage = () => {
  return (
    <Loading>
      <Spinner />
    </Loading>
  );
};
