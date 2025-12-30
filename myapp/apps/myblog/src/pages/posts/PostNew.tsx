import { Typography } from "@repo/ui";
import { PostForm } from "../../components/FostForm";
import { InnerSection } from "../../components/InnerSection";
import { Spacing } from "../../components/Spacing";

function PostNew() {
  return (
    <InnerSection>
      <Typography typography="headingL">글 작성하기</Typography>
      <Spacing y={48} />
      <PostForm />
    </InnerSection>
  );
}

export default PostNew;
