import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AccountService } from "@api/openapi";
import { UserSignUp } from "@components/user/forms/UserSignupForm/schema";
import { useNavigate } from "react-router-dom";
import { GET_USER_KEY } from "../get/useGetMyProfileQuery";

export const useSignupUserKey = () => "SIGNUP_USER";

export default function useUserSignupMutation() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation([useSignupUserKey()], {
    mutationFn: async (data: UserSignUp) => {
      const response = await AccountService.postApiAccountSignup(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_USER_KEY()] });
      navigate("/account/verify-email");
    }
  });
}
