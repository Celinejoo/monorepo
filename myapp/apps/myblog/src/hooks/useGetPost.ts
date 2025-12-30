import { useQuery } from "@tanstack/react-query";
import { getPost } from "../api/getPost";

export const useGetPost = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPost,
  });
};
