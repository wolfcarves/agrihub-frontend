import { AuthService } from "@api/openapi";
import { useMutation } from "@tanstack/react-query";

export default function useForgotPasswordMutation() {
  return useMutation({
    mutationKey: ["FORGOT_PASSWORD"],
    mutationFn: async (email: string | undefined) => {
      const response = await AuthService.postApiAuthResetToken({
        requestBody: {
          email
        }
      });

      return response;
    }
  });
}
