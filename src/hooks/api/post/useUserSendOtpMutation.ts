import { AuthService } from "@api/openapi";
import { useMutation } from "@tanstack/react-query";

export default function useUserSendOtpMutation() {
  return useMutation({
    mutationKey: ["USER_SEND_OTP_KEY"],
    mutationFn: async () => {
      const response = await AuthService.postApiAuthSendOtp();

      return response;
    }
  });
}
