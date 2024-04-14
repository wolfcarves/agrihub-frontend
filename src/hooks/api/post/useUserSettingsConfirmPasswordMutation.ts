import { AuthService } from "@api/openapi";
import { useMutation } from "@tanstack/react-query";

export default function useUserSettingsConfirmPasswordMutation() {
  return useMutation({
    mutationKey: ["useUserSettingsConfirmPasswordMutationKey"],
    mutationFn: async (password: string) => {
      const response = await AuthService.postApiAuthConfirmPassword({
        requestBody: {
          password
        }
      });

      return response;
    }
  });
}
