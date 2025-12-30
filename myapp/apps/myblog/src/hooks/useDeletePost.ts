import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "../api/deletePost";
import { useNavigate } from "react-router";

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      navigate("/");
    },
  });
};
