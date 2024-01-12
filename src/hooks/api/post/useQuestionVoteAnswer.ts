import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  ForumsService,
  QuestionSchema,
  QuestionViewSchema,
  VoteAnswerSchema
} from "@api/openapi";
import { VIEW_QUESTION_KEY } from "../get/useGetViewQuestion";
import { useSelector } from "react-redux";
import {
  getQuestionViewFilter,
  getQuestionViewId,
  getQuestionViewPage
} from "@redux/slices/questionViewSlice";

const useQuestionKey = () => "QUESTIONS_VOTE_ANSWER_KEY";

type VoteAnswerMutation = {
  vote: VoteAnswerSchema;
  id: string;
};

export default function useQuestionVoteAnswer() {
  const queryClient = useQueryClient();
  const id = useSelector(getQuestionViewId);
  const filter = useSelector(getQuestionViewFilter);
  const page = useSelector(getQuestionViewPage);

  return useMutation([useQuestionKey()], {
    async mutationFn(data: VoteAnswerMutation) {
      const { vote, id } = data;
      const response = await ForumsService.postApiForumsVoteAnswer(id, vote);

      return { response, id, vote };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [VIEW_QUESTION_KEY()] });
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [[VIEW_QUESTION_KEY(), id, page, filter]]
      });
    }
  });
}
