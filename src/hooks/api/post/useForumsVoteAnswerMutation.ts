import { ForumsService, VoteAnswerSchema } from "@api/openapi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { VIEW_QUESTION_KEY } from "../get/useGetViewQuestion";

export default function useForumsVoteAnswerMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["FORUMS_VOTE_ANSWER_KEY"],
    mutationFn: async ({
      id,
      type
    }: {
      id?: string;
      type?: "upvote" | "downvote";
    }) => {
      const response = ForumsService.postApiForumsVoteAnswer({
        id: id ?? "",
        requestBody: {
          type: type as VoteAnswerSchema.type
        }
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [VIEW_QUESTION_KEY()] });
    }
  });
}
