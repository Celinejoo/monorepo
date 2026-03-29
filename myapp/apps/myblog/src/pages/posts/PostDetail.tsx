import { Button, Flex, Paragraph } from "@repo/ui";
import { InnerSection } from "../../components/InnerSection";

import { Spacing } from "../../components/Spacing";
import { useNavigate, useParams } from "react-router";

import { useGetPostId } from "../../hooks/useGetPostId";
import MDEditor from "@uiw/react-md-editor";
import { Timestamp } from "firebase/firestore";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useDeletePost } from "../../hooks/useDeletePost";
import "../../assets/css/markdown.css";

function PostDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const { data: post } = useGetPostId(id);
  const { mutate: deletePost } = useDeletePost();

  const handleDelete = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const ok = window.confirm("삭제하시겠습니까?");
    if (ok) {
      deletePost(id);
    }
  };
  return (
    <InnerSection>
      <Paragraph typography="t2" fontWeight="semibold">
        {post?.title}
      </Paragraph>
      <Spacing y={12} />
      <Paragraph typography="sub2">{post?.summary}</Paragraph>
      <Spacing y={12} />
      <Paragraph typography="sub4" color="gray700">
        {post?.createdAt instanceof Timestamp
          ? post?.createdAt.toDate().toLocaleDateString("ko", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
          : post?.createdAt}
      </Paragraph>

      <Spacing y={48} />
      {post && <MDEditor.Markdown source={post.content} />}
      <Spacing y={48} />
      {!!user && (
        <Flex justifyContent="end" gap={12}>
          <Flex.Item>
            <Button
              variant="fill"
              color="text"
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/posts/edit/${post?.id}`);
              }}
            >
              수정하기
            </Button>
          </Flex.Item>
          <Flex.Item>
            <Button
              variant="fill"
              color="text"
              size="small"
              onClick={() => {
                if (post?.id) handleDelete(post.id);
              }}
            >
              삭제하기
            </Button>
          </Flex.Item>
        </Flex>
      )}
    </InnerSection>
  );
}

export default PostDetail;
