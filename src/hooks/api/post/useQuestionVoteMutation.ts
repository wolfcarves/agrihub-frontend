import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ForumsService } from "@api/openapi";
import { GET_QUESTION_KEY } from "../get/useGetQuestionsQuery";
import { VIEW_QUESTION_KEY } from "../get/useGetViewQuestion";

const useQuestionVoteMutationKey = () => "QUESTIONS_DELETE_ANSWER_KEY";

type VoteMutation = {
  id: string;
  requestBody: {
    type: "upvote" | "downvote";
  };
};

export default function useQuestionVoteMutation() {
  const queryClient = useQueryClient();

  return useMutation([useQuestionVoteMutationKey()], {
    async mutationFn(data: VoteMutation) {
      const response = await ForumsService.postApiForumsVote(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [VIEW_QUESTION_KEY()] });
      queryClient.invalidateQueries({ queryKey: [GET_QUESTION_KEY()] });
    }
  });
}
