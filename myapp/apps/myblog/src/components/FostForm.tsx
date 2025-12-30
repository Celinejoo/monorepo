import { Button, FlexLayout, SelectBox, TextField, Typography } from "@repo/ui";
import { Spacing } from "./Spacing";

import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

import { useNavigate, useParams } from "react-router";
import { useAddPost } from "../hooks/useAddPost";

type FormErrors = {
  title?: string;
  summary?: string;
  content?: string;
};

export type CategoryType = "자바스크립트" | "프로젝트" | "Other";

// export const CATEGORIES: CategoryType[] = ["자바스크립트", "프로젝트", "Other"];

// const categoryOptions = CATEGORIES.map((category) => ({
//   label: category,
//   value: category,
// }));

export const PostForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { mutate: addPost } = useAddPost();
  const [error, setErrors] = useState<FormErrors>({});
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  //const [category, setCategory] = useState<CategoryType>("자바스크립트");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    setErrors({});
    if (name === "title") setTitle(value);
    if (name === "summary") setSummary(value);
  };

  const handleEditorChange = (value?: string) => {
    setContent(value || "");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: FormErrors = {};

    setErrors(newErrors);
    if (!title) newErrors.title = "제목을 입력하세요";
    if (!summary) newErrors.summary = "요약을 입력하세요";
    if (!content) newErrors.content = "내용을 입력하세요";

    try {
      addPost({
        id: id ?? "",
        title,
        summary,
        content,
        createdAt: new Date()?.toLocaleString("ko", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="제목"
        type="text"
        name="title"
        value={title}
        placeholder="제목을 입력해주세요"
        onChange={handleChange}
        error={!!error.title}
        helperText={error.title}
      />
      <Spacing y={24} />
      <TextField
        label="요약"
        type="text"
        name="summary"
        value={summary}
        placeholder="한 줄 요약"
        onChange={handleChange}
        error={!!error.summary}
        helperText={error.summary}
      />
      <Spacing y={24} />
      {/* <SelectBox
        label="카테고리"
        options={categoryOptions}
        value={category}
        onChange={(v) => setCategory(v as CategoryType)}
      /> */}
      <Spacing y={24} />
      <Typography typography="caption">내용</Typography>
      <Spacing y={4} />
      <MDEditor height="500px" value={content} onChange={handleEditorChange} />
      {!!error.content && (
        <>
          <Spacing y={4} />
          <Typography typography="caption" color="error">
            {error.content}
          </Typography>
        </>
      )}
      <Spacing y={48} />
      <FlexLayout justifyContent="center">
        <Button variant="solid">등록,수정하기</Button>
      </FlexLayout>
    </form>
  );
};
