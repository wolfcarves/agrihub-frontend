import { ForumsService } from "@api/openapi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { VIEW_QUESTION_KEY } from "../get/useGetViewQuestion";

export default function useForumsDeleteVoteAnswerMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["FORUMS_DELETE_VOTE_ANSWER_KEY"],
    mutationFn: async ({ id }: { id?: string }) => {
      const response = ForumsService.deleteApiForumsDeleteVoteAnswer({
        id: id ?? ""
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [VIEW_QUESTION_KEY()] });
    }
  });
}
