import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import type { PostType } from "../type/postType";

export const getPostId = async (id: string) => {
  const docRef = doc(db, "posts", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error("게시글이 존재하지 않습니다");
  }

  return {
    ...(docSnap.data() as PostType),
    id: docSnap.id,
  };
};
