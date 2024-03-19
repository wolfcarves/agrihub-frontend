import { AuthService } from "@api/openapi";
import { useMutation } from "@tanstack/react-query";

export default function useForgotPasswordByOTPMutation() {
  return useMutation({
    mutationKey: ["FORGOT_PASSWORD_BY_OTP"],
    mutationFn: async (contact_number: string | undefined) => {
      const response = await AuthService.postApiAuthResetTokenOtp({
        requestBody: {
          contact_number
        }
      });

      return response;
    }
  });
}
