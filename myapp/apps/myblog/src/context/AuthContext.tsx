import { createContext, useEffect, useState } from "react";

import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { app } from "../../firebase";

const AuthContext = createContext({
  user: null as User | null,
});

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const auth = getAuth(app);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        console.log("로그인 완료");
      } else {
        setCurrentUser(user);
        console.log("로그인 X");
      }
    });
  }, [auth]);

  return (
    <AuthContext.Provider value={{ user: currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
