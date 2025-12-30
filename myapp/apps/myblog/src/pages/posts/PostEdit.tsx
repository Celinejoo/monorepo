import { Typography } from "@repo/ui";
import { PostForm } from "../../components/FostForm";
import { InnerSection } from "../../components/InnerSection";
import { Spacing } from "../../components/Spacing";

function PostEdit() {
  return (
    <InnerSection>
      <Typography typography="headingL">글 수정하기</Typography>
      <Spacing y={48} />
      <PostForm />
    </InnerSection>
  );
}

export default PostEdit;
