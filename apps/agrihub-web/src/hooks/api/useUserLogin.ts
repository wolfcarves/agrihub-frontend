import { useMutation } from "@tanstack/react-query";
import { AuthService } from "@services/AuthService";

const useLoginUserKey = "user_login";

export default async function useLoginUserMutation() {
  return useMutation([useLoginUserKey], {
    mutationFn: async () => {
      const response = await AuthService.postV1ApiAuthLogin();

      console.log(response);

      return response;
    }
  });
}
