import { AuthService, ResetPasswordRequestBody } from "@api/openapi";
import { useMutation } from "@tanstack/react-query";

type PasswordParams = {
  token: string;
  requestBody: ResetPasswordRequestBody;
};

export default function useResetPasswordMutation() {
  return useMutation({
    mutationKey: ["USER_RESET_PASSWORD"],
    mutationFn: async (data: PasswordParams) => {
      const response = AuthService.postApiAuthResetPassword(data);

      return response;
    }
  });
}
