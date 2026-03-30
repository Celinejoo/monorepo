import { Button, Flex, Paragraph, SelectBox, TextField } from "@repo/ui";
import { Spacing } from "./Spacing";

import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router";
import { useAddPost } from "../hooks/useAddPost";
import { useGetPostId } from "../hooks/useGetPostId";
import { useUpdatePost } from "../hooks/useUpdatePost";

type FormErrors = {
  title?: string;
  summary?: string;
  content?: string;
};

export type CategoryType = "자바스크립트" | "프로젝트" | "OTHERS";

// eslint-disable-next-line react-refresh/only-export-components
export const CATEGORIES: CategoryType[] = [
  "자바스크립트",
  "프로젝트",
  "OTHERS",
];

const categoryOptions = CATEGORIES.map((category) => ({
  label: category,
  value: category,
}));

export const PostForm = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { mutate: addPost } = useAddPost();
  const { mutate: updatePost } = useUpdatePost();
  const { data: post } = useGetPostId(id);
  const [error, setErrors] = useState<FormErrors>({});
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState<CategoryType>("자바스크립트");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    setErrors({});
    if (name === "title") setTitle(value);
    if (name === "summary") setSummary(value);
    if (name === "category") setCategory(category);
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
      if (post && post.id) {
        updatePost({
          id: post.id,
          data: {
            title: title,
            category: category,
            summary: summary,
            content: content,
            id: post.id,
          },
        });
        navigate("/");
      } else {
        addPost({
          id: id ?? "",
          title,
          summary,
          category,
          content,
          createdAt: new Date()?.toLocaleString("ko", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }),
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setSummary(post.summary);
      setContent(post.content);
      setCategory(post.category);
    }
  }, [post]);

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
      <SelectBox
        defaultValue="javascript"
        label="카테고리"
        options={categoryOptions}
        value={category}
        onChange={(v) => setCategory(v as CategoryType)}
      />

      <Spacing y={24} />
      <Paragraph typography="sub3">내용</Paragraph>

      <Spacing y={4} />
      <MDEditor height="500px" value={content} onChange={handleEditorChange} />
      {!!error.content && (
        <>
          <Spacing y={4} />
          <Paragraph typography="sub4" color="red500">
            {error.content}
          </Paragraph>
        </>
      )}
      <Spacing y={48} />
      <Flex alignItems="center" justifyContent="center">
        <Flex.Item>
          <Button variant="fill" color="primary" size="large">
            {post ? "수정하기" : "등록하기"}
          </Button>
        </Flex.Item>
      </Flex>
    </form>
  );
};
