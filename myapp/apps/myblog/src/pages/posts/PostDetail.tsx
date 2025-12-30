import { Typography } from "@repo/ui";
import { InnerSection } from "../../components/InnerSection";

import { Spacing } from "../../components/Spacing";
import { useParams } from "react-router";

import { useGetPostId } from "../../hooks/useGetPostId";
import MDEditor from "@uiw/react-md-editor";
import { Timestamp } from "firebase/firestore";

function PostDetail() {
  const { id } = useParams();

  const { data: post } = useGetPostId(id);
  return (
    <InnerSection>
      <Typography typography="headingL">{post?.title}</Typography>
      <Spacing y={12} />
      <Typography typography="bodyL">{post?.summary}</Typography>
      <Spacing y={12} />
      <Typography typography="caption" color="textSubtle">
        {post?.createdAt instanceof Timestamp
          ? post?.createdAt.toDate().toLocaleDateString("ko", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
          : post?.createdAt}
      </Typography>

      <Spacing y={48} />
      {post && <MDEditor.Markdown source={post.content} />}
      <Spacing y={48} />
    </InnerSection>
  );
}

export default PostDetail;
