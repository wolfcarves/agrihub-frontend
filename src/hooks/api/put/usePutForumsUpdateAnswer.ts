import { ForumsService } from "@api/openapi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { VIEW_QUESTION_KEY } from "../get/useGetViewQuestion";

interface ForumsUpdateAnswer {
  id: string;
  requestBody: {
    answer: string;
  };
}

export default function usePutForumsUpdateAnswer() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["FORUMS_UPDATE_ANSWER"],
    mutationFn: async (data: ForumsUpdateAnswer) => {
      await ForumsService.putApiForumsUpdateAnswer(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [VIEW_QUESTION_KEY()] });
    }
  });
}
