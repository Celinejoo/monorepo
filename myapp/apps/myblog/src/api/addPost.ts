import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import type { PostType } from "../type/postType";

export const addPost = async (post: PostType) => {
  await addDoc(collection(db, "posts"), {
    ...post,
  });
};
