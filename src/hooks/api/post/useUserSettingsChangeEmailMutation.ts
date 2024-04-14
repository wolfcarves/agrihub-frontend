import { AuthService } from "@api/openapi";
import { useMutation } from "@tanstack/react-query";

export default function useUserSettingsChangeEmailMutation() {
  return useMutation({
    mutationKey: ["useUserSettingsChangeEmailMutationKey"],
    mutationFn: async (email: string) => {
      const response = await AuthService.postApiAuthUpdateEmail({
        requestBody: {
          email
        }
      });

      return response;
    }
  });
}
