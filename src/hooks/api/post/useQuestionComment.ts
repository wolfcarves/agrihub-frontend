import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CommentsSchema, ForumsService } from "@api/openapi";
import { GET_QUESTION } from "../get/useGetQuestionsQuery";
import { VIEW_QUESTION } from "../get/useGetViewQuestion";

const useQuestionCommentKey = () => "COMMENTS_KEY";

type MutationData = {
  answerId: string;
  userComment: CommentsSchema;
};

export default function useQuestionComment() {
  const queryClient = useQueryClient();

  return useMutation([useQuestionCommentKey()], {
    async mutationFn(data: MutationData) {
      const { answerId, userComment } = data;
      const response = await ForumsService.postApiForumsCreateComments(
        answerId,
        userComment
      );

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [VIEW_QUESTION()] });
    }
  });
}
