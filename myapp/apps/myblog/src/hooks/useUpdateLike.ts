import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateLike } from "../api/updateLike";
import type { PostType } from "../type/postType";

export const useUpdateLike = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Pick<PostType, "likeCount">;
    }) => updateLike(id, data),
    onMutate: async ({ id, data }) => {
      // 기존 쿼리를 취소(cancelQueries)하고,
      // 현재 쿼리 데이터를 저장(getQueryData - 특정 쿼리키에 해당하는 캐시된 데이터를 가져옴)
      await queryClient.cancelQueries({ queryKey: ["post", id] });
      const preveData = queryClient.getQueryData<PostType>(["post", id]);
      //  새로운 상태를 쿼리 클라이언트에 저장(setQueryData)한다.
      queryClient.setQueryData<PostType>(["post", id], (old) => {
        if (!old) return old;
        return { ...old, likeCount: data.likeCount };
      });
      return { preveData };
    },
    onError: (error, { id }, context) => {
      alert(error);
      queryClient.setQueryData([["post", id]], context?.preveData);
    },
  });
};
