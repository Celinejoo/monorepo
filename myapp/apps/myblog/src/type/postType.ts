import type { Timestamp } from "firebase/firestore";
import type { CategoryType } from "../components/PostForm";

export type PostType = {
  // ownerId?: string;
  id: string;
  title: string;
  summary: string;
  createdAt?: string | Timestamp;
  content: string;
  category: CategoryType;
  likeCount?: number;
};
