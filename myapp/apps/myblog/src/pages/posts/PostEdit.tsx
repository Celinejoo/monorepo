import { Paragraph } from "@repo/ui";
import { PostForm } from "../../components/PostForm";
import { InnerSection } from "../../components/InnerSection";
import { Spacing } from "../../components/Spacing";

function PostEdit() {
  return (
    <InnerSection>
      <Paragraph typography="t2" fontWeight="bold">
        글 수정하기
      </Paragraph>
      <Spacing y={48} />
      <PostForm />
    </InnerSection>
  );
}

export default PostEdit;
