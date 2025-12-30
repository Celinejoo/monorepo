import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";

export const deletePost = async (id: string) => {
  const docRef = doc(db, "posts", id);
  await deleteDoc(docRef);
};
