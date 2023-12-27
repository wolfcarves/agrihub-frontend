import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ForumsService } from "@api/openapi";
import { VIEW_QUESTION } from "../get/useGetViewQuestion";

const useQuestionDeletAnswerKey = () => "QUESTIONS_DELETE_ANSWER_KEY";

export default function useQuestionDeleteAnswerVote() {
  const queryClient = useQueryClient();

  return useMutation([useQuestionDeletAnswerKey()], {
    async mutationFn(id: string) {
      const response = await ForumsService.deleteApiForumsDeleteVoteAnswer(id);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [VIEW_QUESTION()] });
    }
  });
}
