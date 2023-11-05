import { useMutation } from "@tanstack/react-query";
import { AccountService } from "@api/openapi";
import { UserSignUp } from "@components/user/forms/UserSignupForm/schema";
import { useNavigate } from "react-router-dom";

export const useSignupUserKey = () => "SIGNUP_USER";

export default function useUserSignupMutation() {
  const navigate = useNavigate();

  return useMutation([useSignupUserKey()], {
    mutationFn: async (data: UserSignUp) => {
      const response = AccountService.postApiAccountSignup(data);

      return response;
    },
    onSuccess: () => {
      navigate("/account/verify-email");
    }
  });
}
