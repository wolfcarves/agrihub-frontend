import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ForumsService } from "@api/openapi";
import { VIEW_QUESTION_KEY } from "../get/useGetViewQuestion";

const useQuestionDeletAnswerKey = () => "QUESTIONS_DELETE_ANSWER_KEY";

export default function useQuestionDeleteVoteMutation() {
  const queryClient = useQueryClient();

  return useMutation([useQuestionDeletAnswerKey()], {
    async mutationFn(id: string) {
      const response = await ForumsService.deleteApiForumsVoteDelete(id);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [VIEW_QUESTION_KEY()] });
    }
  });
}
