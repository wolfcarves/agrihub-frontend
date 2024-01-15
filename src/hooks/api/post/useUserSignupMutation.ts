import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AccountService } from "@api/openapi";
import { UserSignUp } from "@components/user/account/forms/UserSignupForm/schema";
import { useNavigate } from "react-router-dom";
import { GET_MY_PROFILE_KEY } from "../get/useGetMyProfileQuery";

export const useSignupUserKey = () => "SIGNUP_USER";

export default function useUserSignupMutation() {
  const queryClient = useQueryClient();

  return useMutation([useSignupUserKey()], {
    mutationFn: async (data: UserSignUp) => {
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
