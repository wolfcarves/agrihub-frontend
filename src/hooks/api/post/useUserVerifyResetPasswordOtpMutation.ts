import { useMutation } from "@tanstack/react-query";
import { AuthService } from "@api/openapi";

export default function useUserVerifyResetPasswordOtpMutation() {
  return useMutation({
    mutationKey: ["key"],
    mutationFn: async (code: number) => {
      const response = AuthService.postApiAuthVerifyTokenOtp({
        requestBody: {
          code
        }
      });

      return response;
    }
  });
}
