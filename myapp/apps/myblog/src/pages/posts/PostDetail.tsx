import { Typography } from "@repo/ui";
import { InnerSection } from "../../components/InnerSection";
import { PostForm } from "../../components/FostForm";
import { Spacing } from "../../components/Spacing";

function PostDetail() {
  return (
    <InnerSection>
      <Typography typography="headingL">글 수정하기</Typography>
      <Spacing y={48} />
      <PostForm />
    </InnerSection>
  );
}

export default PostDetail;
