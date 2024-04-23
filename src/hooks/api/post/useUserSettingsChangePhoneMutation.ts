import { AuthService } from "@api/openapi";
import { useMutation } from "@tanstack/react-query";

export default function useUserSettingsChangePhoneMutation() {
  return useMutation({
    mutationKey: ["useUserSettingsChangePhoneMutationKey"],
    mutationFn: async (number: string) => {
      const response = await AuthService.postApiAuthUpdateNumber({
        requestBody: {
          number
        }
      });

      return response;
    }
  });
}
