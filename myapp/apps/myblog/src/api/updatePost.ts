import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import type { PostType } from "../type/postType";

export const updatePost = async (id: string, post: PostType) => {
  const docRef = doc(db, "posts", id);
  await updateDoc(docRef, {
    ...post,
  });
};
