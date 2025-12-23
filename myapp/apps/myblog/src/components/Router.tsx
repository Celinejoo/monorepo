import { Navigate, Route, Routes } from "react-router";
import Home from "../pages/Home";
import PostNew from "../pages/posts/PostNew";
import PostDetail from "../pages/posts/PostDetail";
import PostEdit from "../pages/posts/PostEdit";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/new" element={<PostNew />} />
      <Route path="/posts/:id" element={<PostDetail />} />
      <Route path="/posts/edit/:id" element={<PostEdit />} />
      <Route path="/*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default Router;
