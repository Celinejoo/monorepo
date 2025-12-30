import { Navigate, Route, Routes } from "react-router";
import Home from "../pages/Home";
import PostNew from "../pages/posts/PostNew";
import PostDetail from "../pages/posts/PostDetail";
import PostEdit from "../pages/posts/PostEdit";
import Login from "../pages/Login";

interface RouterProps {
  isAuth: boolean;
}

function Router({ isAuth }: RouterProps) {
  // isAuth: true -> 로그인 한 상태

  return (
    <Routes>
      {isAuth ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts/new" element={<PostNew />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/posts/edit/:id" element={<PostEdit />} />
          <Route path="/*" element={<Navigate replace to="/" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/*" element={<Navigate replace to="/" />} />
        </>
      )}
    </Routes>
  );
}

export default Router;
