import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ForumsService } from "@api/openapi";
import { GET_QUESTION_KEY } from "../get/useGetQuestionsQuery";

const useQuestionDeletAnswerKey = () => "QUESTIONS_DELETE_ANSWER_KEY";

export default function useQuestionDeleteVoteMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [useQuestionDeletAnswerKey()],
    mutationFn: async (voteId: string | undefined) => {
      if (!voteId) throw new Error("voteId is undefined");

      const response = await ForumsService.deleteApiForumsVoteDelete({
        id: voteId
      });

      return response.message;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_QUESTION_KEY()] });
    }
  });
}
