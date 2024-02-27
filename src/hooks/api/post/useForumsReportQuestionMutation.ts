import { ForumsService } from "@api/openapi";
import { useMutation } from "@tanstack/react-query";

export default function useForumsReportQuestionMutation() {
  return useMutation({
    mutationKey: ["FORUMS_REPORT_QUESTION_KEY"],
    mutationFn: async ({ id, reason }: { id: string; reason: string }) => {
      const response = await ForumsService.postApiForumsReportQuestion({
        id,
        requestBody: {
          reason
        }
      });

      return response;
    }
  });
}
