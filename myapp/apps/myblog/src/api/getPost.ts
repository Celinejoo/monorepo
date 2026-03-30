import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import type { PostType } from "../type/postType";

export const getPost = async () => {
  const postRef = collection(db, "posts");
  const postsQuery = query(postRef, orderBy("createdAt", "desc"));
  const data = await getDocs(postsQuery);

  return data.docs.map((doc) => ({
    ...(doc.data() as PostType),
    id: doc.id,
  }));
};
