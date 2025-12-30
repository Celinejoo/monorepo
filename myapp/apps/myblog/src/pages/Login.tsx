import styled from "@emotion/styled";
import { Button, TextField, Typography } from "@repo/ui";
import { Spacing } from "../components/Spacing";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
import { useNavigate } from "react-router";

const Wrapper = styled.div`
  width: 580px;
  margin: 60px auto;
`;

function Login() {
  const navigate = useNavigate();

  const [error, setError] = useState<boolean>(false);
  const [helperText, setHelperText] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    setError(false);
    setHelperText("");

    if (name === "email") {
      setEmail(value);
    }

    if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error: unknown) {
      console.log(error);
      setError(true);
      setHelperText("아이디와 비밀번호를 확인해주세요.");
    }
  };
  return (
    <Wrapper>
      <Typography typography="headingL">로그인</Typography>
      <Spacing y={40} />
      <form onSubmit={handleSubmit}>
        <TextField
          label="아이디"
          type="email"
          name="email"
          value={email}
          placeholder="아이디를 입력해주세요"
          error={error}
          helperText={helperText}
          onChange={handleChange}
        />
        <Spacing y={24} />
        <TextField
          label="비밀번호"
          type="password"
          name="password"
          value={password}
          placeholder="비밀번호를 입력해주세요"
          error={error}
          helperText={helperText}
          onChange={handleChange}
        />
        <Spacing y={24} />

        <Spacing y={48} />
        <Button variant="solid" full disabled={error}>
          로그인
        </Button>
      </form>
    </Wrapper>
  );
}

export default Login;
