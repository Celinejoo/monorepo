import { Button, FlexLayout, SelectBox, TextField } from "@repo/ui";
import { Spacing } from "./Spacing";

import MDEditor from "@uiw/react-md-editor";

export const PostForm = () => {
  return (
    <form onSubmit={() => {}}>
      <TextField
        label="제목"
        type="text"
        name="title"
        // value={title}
        placeholder="제목을 입력해주세요"
      />
      <Spacing y={24} />
      <TextField
        label="요약"
        type="text"
        name="password"
        placeholder="한 줄 요약"
      />
      <Spacing y={24} />
      <SelectBox
        label="카테고리"
        defaultValue="javaScript"
        options={[
          { label: "자바스크립트", value: "javaScript" },
          { label: "프로젝트", value: "project" },
          { label: "Others", value: "others" },
        ]}
      />
      <Spacing y={24} />
      <MDEditor height="500px" />
      <Spacing y={48} />
      <FlexLayout justifyContent="center">
        <Button variant="solid">등록,수정하기</Button>
      </FlexLayout>
    </form>
  );
};
