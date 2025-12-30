import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import type { PostType } from "../type/postType";

export const getPost = async () => {
  const data = await getDocs(collection(db, "posts"));
  return data.docs.map((doc) => ({
    ...(doc.data() as PostType),
    id: doc.id,
  }));
};
