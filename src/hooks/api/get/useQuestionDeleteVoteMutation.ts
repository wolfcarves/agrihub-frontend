import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ForumsService } from "@api/openapi";
import { GET_QUESTION_KEY } from "./useGetQuestionsQuery";
import { VIEW_QUESTION_KEY } from "./useGetViewQuestion";

const useQuestionDeleteVoteKey = () => "QUESTIONS_DELETE_VOTE_KEY";

export default function useQuestionDeleteVoteMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [useQuestionDeleteVoteKey()],
    mutationFn: async (voteId: string | undefined) => {
      if (!voteId) throw new Error("voteId is undefined");

      const response = await ForumsService.deleteApiForumsVoteDelete({
        id: voteId
      });

      return response.message;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [VIEW_QUESTION_KEY()] });
      queryClient.invalidateQueries({ queryKey: [GET_QUESTION_KEY()] });
    }
  });
}
