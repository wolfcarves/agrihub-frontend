import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthService, UserLoginSchema } from "@api/openapi";
import { GET_USER_KEY } from "./useGetUserQuery";

const useLoginUserKey = "user_login";

export default function useLoginUserMutation() {
  const queryClient = useQueryClient();

  return useMutation([useLoginUserKey], {
    async mutationFn(data: UserLoginSchema) {
      const response = await AuthService.postApiAuthLogin(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_USER_KEY()] });
    }
  });
}
