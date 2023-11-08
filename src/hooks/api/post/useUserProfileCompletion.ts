import { useMutation } from "@tanstack/react-query";
import { AccountService, UserCompletionSchema } from "@api/openapi";
import { useNavigate } from "react-router-dom";

export default function useUserProfileCompletion() {
  const navigate = useNavigate();

  return useMutation(["key"], {
    mutationFn: async (data: UserCompletionSchema) => {
      const response =
        await AccountService.postApiAccountProfileCompletion(data);

      return response;
    },
    onSuccess: () => navigate("/account/final-setup")
  });
}
