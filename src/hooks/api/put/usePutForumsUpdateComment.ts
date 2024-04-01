import { ForumsService } from "@api/openapi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { VIEW_QUESTION_KEY } from "../get/useGetViewQuestion";

interface UpdateForumsComment {
  id: string;
  requestBody: {
    comment: string;
  };
}

export default function usePutForumsUpdateComment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["FORUMS_UPDATE_COMMENT"],
    mutationFn: async (data: UpdateForumsComment) => {
      await ForumsService.putApiForumsUpdateComment(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [VIEW_QUESTION_KEY()] });
    }
  });
}
