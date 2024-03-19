import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ForumsService } from "@api/openapi";
import { VIEW_QUESTION_KEY } from "./useGetViewQuestion";

const useQuestionDeleteAnswerKey = () => "QUESTIONS_DELETE_ANSWER_KEY";

export default function useQuestionDeleteAnswerVoteMutation() {
  const queryClient = useQueryClient();

  return useMutation([useQuestionDeleteAnswerKey()], {
    async mutationFn(id: string) {
      const response = await ForumsService.deleteApiForumsDeleteVoteAnswer({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [VIEW_QUESTION_KEY()] });
    }
  });
}
