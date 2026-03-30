import { Badge, Button, Flex, IconButton, Paragraph, Tooltip } from "@repo/ui";
import { InnerSection } from "../../components/InnerSection";

import { Spacing } from "../../components/Spacing";
import { useNavigate, useParams } from "react-router";

import { useGetPostId } from "../../hooks/useGetPostId";
import MDEditor from "@uiw/react-md-editor";
import { Timestamp } from "firebase/firestore";
import { startTransition, useContext, useOptimistic } from "react";
import AuthContext from "../../context/AuthContext";
import { useDeletePost } from "../../hooks/useDeletePost";
import "../../assets/css/markdown.css";
import { useUpdateLike } from "../../hooks/useUpdateLike";

function PostDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const { data: post } = useGetPostId(id);
  const { mutate: deletePost } = useDeletePost();
  const { mutateAsync: updateLike } = useUpdateLike();

  const count = post?.likeCount ?? 0;

  const [optimisticCount, addOptimisticLike] = useOptimistic<number, number>(
    count,
    (current, delta) => current + delta,
  );

  const handleLikeButton = () => {
    if (!post) return;

    const nextCount = count + 1;

    startTransition(async () => {
      addOptimisticLike(1);

      try {
        await updateLike({
          id: post.id,
          data: {
            likeCount: nextCount,
          },
        });
      } catch {
        addOptimisticLike(-1);
      }
    });
  };
  const handleDelete = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const ok = window.confirm("삭제하시겠습니까?");
    if (ok) {
      deletePost(id);
    }
  };

  const BadgeColor =
    post?.category === "자바스크립트"
      ? "green500"
      : post?.category === "프로젝트"
        ? "blue500"
        : "pink500";
  return (
    <InnerSection>
      <Badge background={BadgeColor} size="small">
        <Paragraph typography="sub4" color="white0">
          {post?.category}
        </Paragraph>
      </Badge>
      <Spacing y={24} />
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
      <Tooltip content="좋아요를 눌러주세요">
        <IconButton
          icon={<>💙</>}
          label={<>optimisticCount</>}
          onClick={handleLikeButton}
        />
      </Tooltip>
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
