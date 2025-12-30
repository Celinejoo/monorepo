import { useQuery } from "@tanstack/react-query";
import { getPostId } from "../api/getPostId";

export const useGetPostId = (id: string | undefined) =>
  useQuery({
    queryKey: ["post", id],
    queryFn: () => getPostId(id!),
    enabled: !!id,
    refetchOnWindowFocus: false,
  });
