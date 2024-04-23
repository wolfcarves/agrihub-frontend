import { AuthService } from "@api/openapi";
import { useMutation } from "@tanstack/react-query";

export default function useUserSettingsChangePhoneVerifyOtpMutation() {
  return useMutation({
    mutationKey: ["useUserSettingsChangePhoneVerifyOtpMutationKey"],
    mutationFn: async (otp: number) => {
      const response = await AuthService.postApiAuthConfirmNumberUpdate({
        requestBody: {
          otp
        }
      });

      return response;
    }
  });
}
