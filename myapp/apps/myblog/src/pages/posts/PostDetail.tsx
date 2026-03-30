import { Badge, Button, Flex, IconButton, Paragraph, Tooltip } from "@repo/ui";
import { InnerSection } from "../../components/InnerSection";

import { Spacing } from "../../components/Spacing";
import { useNavigate, useParams } from "react-router";

import { useGetPostId } from "../../hooks/useGetPostId";
import MDEditor from "@uiw/react-md-editor";
import { Timestamp } from "firebase/firestore";
import {
  startTransition,
  useContext,
  useEffect,
  useOptimistic,
  useState,
} from "react";
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
  const initialCount = post?.likeCount ?? 0;
  const [count, setCount] = useState<number>(initialCount);
  const [optimisticCount, addOptimisticLike] = useOptimistic<number, number>(
    count,
    (current, delta) => current + delta,
  );

  const handleLikeButton = () => {
    startTransition(() => {
      addOptimisticLike(1);
      if (post) {
        const newCount = count + 1;
        updateLike({
          id: post.id,
          data: {
            likeCount: newCount,
          },
        });
        setCount(newCount);
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

  useEffect(() => {
    if (typeof post?.likeCount === "number") {
      setCount(post.likeCount);
    }
  }, [post?.likeCount]);

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
      <Flex justifyContent="center">
        <Tooltip content="좋아요를 눌러주세요" placement="bottom">
          <IconButton
            icon={<>💙</>}
            label={optimisticCount}
            onClick={handleLikeButton}
          />
        </Tooltip>
      </Flex>

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
