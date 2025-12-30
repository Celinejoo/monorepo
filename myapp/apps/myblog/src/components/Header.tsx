import { Button, FlexLayout } from "@repo/ui";
import { Spacing } from "./Spacing";
import { getAuth, signOut } from "firebase/auth";

import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { app } from "../../firebase";
import { useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      const auth = getAuth(app);
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleNewPost = () => {
    navigate("/posts/new");
  };

  return (
    <>
      <Spacing y={12} />
      <FlexLayout justifyContent="end" gap={12}>
        {user ? (
          <>
            <Button variant="solid" size="small" onClick={handleNewPost}>
              글 작성하기
            </Button>
            <Button variant="gray" size="small" onClick={handleLogout}>
              로그아웃
            </Button>
          </>
        ) : (
          <Button variant="solid" size="small" onClick={handleLogin}>
            로그인
          </Button>
        )}
        <Spacing x={4} />
      </FlexLayout>
    </>
  );
};
