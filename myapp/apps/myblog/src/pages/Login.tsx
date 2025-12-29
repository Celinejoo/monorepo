import styled from "@emotion/styled";
import { Button, FlexLayout, TextField, Typography } from "@repo/ui";

const Wrapper = styled.div`
  width: 580px;
  margin: 60px auto;
`;

function Login() {
  return (
    <Wrapper>
      <FlexLayout direction="column" gap={12}>
        <Typography typography="headingL">로그인</Typography>
        <TextField
          label="아이디"
          type="text"
          placeholder="아이디를 입력해주세요"
        />

        <TextField
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <Button variant="solid">로그인</Button>
      </FlexLayout>
    </Wrapper>
  );
}

export default Login;
