import { AuthService, VerifyOTPRequest } from "@api/openapi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GET_MY_PROFILE_KEY } from "../get/useGetMyProfileQuery";

export default function userUserVerifyOtpMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["USER_VERIFY_OTP_KEY"],
    mutationFn: async (data: VerifyOTPRequest) => {
      const response = await AuthService.postApiAuthVerifyOtp({
        requestBody: data
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_MY_PROFILE_KEY()] });
    }
  });
}
