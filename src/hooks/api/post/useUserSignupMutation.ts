import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AccountService, UserRegisterSchema } from "@api/openapi";
import { GET_MY_PROFILE_KEY } from "../get/useGetMyProfileQuery";

export const useSignupUserKey = () => "SIGNUP_USER";

export default function useUserSignupMutation() {
  const queryClient = useQueryClient();

  return useMutation([useSignupUserKey()], {
    mutationFn: async (data: UserRegisterSchema) => {
      const response = await AccountService.postApiAccountSignup({
        requestBody: data
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_MY_PROFILE_KEY()] });
    }
  });
}
