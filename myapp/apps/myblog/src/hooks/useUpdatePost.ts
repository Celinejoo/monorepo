import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePost } from "../api/updatePost";
import type { PostType } from "../type/postType";

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: PostType }) =>
      updatePost(id, data),
    onSuccess: (_data, { id }) => {
      queryClient.invalidateQueries({ queryKey: ["post", id] });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
