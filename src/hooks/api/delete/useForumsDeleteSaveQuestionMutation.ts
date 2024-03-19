import { ForumsService } from "@api/openapi";
import { useMutation } from "@tanstack/react-query";

export default function useForumsDeleteSaveQuestionMutation() {
  return useMutation({
    mutationKey: ["FORUMS_DELETE_SAVE_QUESTION_KEY"],
    mutationFn: async (id: string) => {
      const response = await ForumsService.deleteApiForumsRemoveSavedQuestion({
        id
      });

      return response;
    }
  });
}
