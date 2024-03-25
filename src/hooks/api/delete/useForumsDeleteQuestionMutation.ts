import { ForumsService } from "@api/openapi";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export default function useForumsDeleteQuestionMutation() {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["FORUMS_DELETE_QUESTION_KEY"],
    mutationFn: async (id: string) => {
      const response = await ForumsService.deleteApiForumsDeleteQuestion({
        id
      });

      return response;
    },
    onSuccess: () => {
      navigate("/forum", { replace: true });
    }
  });
}
