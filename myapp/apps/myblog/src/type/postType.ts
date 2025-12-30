import type { Timestamp } from "firebase/firestore";

export type PostType = {
  // ownerId?: string;
  id: string;
  title: string;
  summary: string;
  createdAt?: string | Timestamp;
  content: string;
};
