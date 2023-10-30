import { useMutation } from "@tanstack/react-query";
import { AuthService, UserLoginSchema } from "@api/openapi";

const useLoginUserKey = "user_login";

export default function useLoginUserMutation() {
  return useMutation([useLoginUserKey], {
    async mutationFn(data: UserLoginSchema) {
      const response = await AuthService.postApiAuthLogin(data);

      console.log(response.user?.email);
      return response;
    }
  });
}
