import { AuthService } from "@api/openapi";
import { useMutation } from "@tanstack/react-query";

export default function useUserFindForgottenAccount() {
  return useMutation({
    mutationKey: ["postApiAuthFindForgottenAccountKey"],
    mutationFn: async (account?: string) => {
      const response = await AuthService.postApiAuthFindForgottenAccount({
        requestBody: { account }
      });

      return response;
    }
  });
}
