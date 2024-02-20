import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CommentsSchema, ForumsService } from "@api/openapi";
import { VIEW_QUESTION_KEY } from "../get/useGetViewQuestion";

const useQuestionAddCommentMutationKey = () => "COMMENTS_KEY";

type MutationData = {
  answerId: string;
  userComment: CommentsSchema;
};

export default function useQuestionAddCommentMutation() {
  const queryClient = useQueryClient();

  return useMutation([useQuestionAddCommentMutationKey()], {
    async mutationFn(data: MutationData) {
      const { answerId, userComment } = data;

      const response = await ForumsService.postApiForumsCreateComments({
        answerId,
        requestBody: userComment
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [VIEW_QUESTION_KEY()] });
    }
  });
}
