import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import type { PostType } from "../type/postType";

export const updateLike = async (
  id: string,
  data: Pick<PostType, "likeCount">,
) => {
  const docRef = doc(db, "posts", id);
  await updateDoc(docRef, {
    likeCount: data.likeCount,
  });
};
