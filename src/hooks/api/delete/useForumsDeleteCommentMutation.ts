import { ForumsService } from "@api/openapi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { VIEW_QUESTION_KEY } from "../get/useGetViewQuestion";

export default function useForumsDeleteCommentMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["FORUMS_DELETE_COMMENT_KEY"],
    mutationFn: async (id: string) => {
      const response = await ForumsService.deleteApiForumsDeleteComment({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [VIEW_QUESTION_KEY()] });
    }
  });
}
