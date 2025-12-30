import { getAuth, onAuthStateChanged } from "firebase/auth";
import Router from "./components/Router";
import { app } from "../firebase";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  const auth = getAuth(app);
  const [isAuth, setIsAuth] = useState(!!auth?.currentUser);

  // onAuthStateChanged : 인증상태가 변경될 때 마다 호출되는 리스너 설정
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
        console.log("로그인 완료");
      } else {
        setIsAuth(false);
        console.log("로그인 X");
      }
    });
  }, [auth]);

  return (
    <QueryClientProvider client={queryClient}>
      <Router isAuth={isAuth} />
    </QueryClientProvider>
  );
}

export default App;
