import { ForumsService, UpdateQuestionSchema } from "@api/openapi";
import { useMutation } from "@tanstack/react-query";

export default function usePutForumsUpdateQuestion() {
  return useMutation({
    mutationKey: ["PUT_FORUMS_UPDATE_QUESTION_KEY"],
    mutationFn: async (data: {
      id: string;
      formData: UpdateQuestionSchema;
    }) => {
      const response = await ForumsService.putApiForums(data);

      return response;
    }
  });
}
