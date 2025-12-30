import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPost } from "../api/addPost";

export const useAddPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
