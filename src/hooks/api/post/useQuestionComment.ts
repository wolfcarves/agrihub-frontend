import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CommentsSchema, ForumsService } from "@api/openapi";
import { GET_QUESTION } from "../get/useGetQuestions";

const useQuestionCommentKey = () => "COMMENTS_KEY";

type MutationData = {
  answerId: string;
  userComment: CommentsSchema;
};

export default function useQuestionComment() {
  const queryClient = useQueryClient();

  return useMutation(
    [useQuestionCommentKey()],
    (data: MutationData) => {
      const { answerId, userComment } = data;

      return ForumsService.postApiForumsCreateComments(answerId, userComment);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [GET_QUESTION("")] });
      }
    }
  );
}
