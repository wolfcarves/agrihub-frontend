import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ForumsService } from "@api/openapi";
import { VIEW_QUESTION } from "../get/useGetViewQuestion";

const useQuestionDeletAnswerKey = () => "QUESTIONS_DELETE_ANSWER_KEY";

type VoteMutation = {
  id: string;
  requestBody: {
    type: "upvote" | "downvote";
  };
};

export default function useQuestionVoteMutation() {
  const queryClient = useQueryClient();

  return useMutation([useQuestionDeletAnswerKey()], {
    async mutationFn(data: VoteMutation) {
      const { id, requestBody } = data;
      const response = await ForumsService.postApiForumsVote(id, requestBody);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [VIEW_QUESTION()] });
    }
  });
}
