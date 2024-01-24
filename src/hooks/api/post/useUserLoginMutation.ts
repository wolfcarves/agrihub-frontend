import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthService, UserLoginSchema } from "@api/openapi";
import { GET_MY_PROFILE_KEY } from "../get/useGetMyProfileQuery";
import { useNavigate } from "react-router-dom";
import useAuth from "@hooks/useAuth";

const useLoginUserKey = () => "user_login";

export default function useLoginUserMutation() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // const auth = useAuth();

  return useMutation([useLoginUserKey()], {
    async mutationFn(data: UserLoginSchema) {
      const response = await AuthService.postApiAuthLogin({
        requestBody: data
      });

      return response;
    },
    onSuccess: userAuth => {
      queryClient.invalidateQueries({ queryKey: [GET_MY_PROFILE_KEY()] });

      if (userAuth?.user?.verification_level === "4") {
        navigate("/");
      } else {
        navigate("/account/verify-email");
      }
    },
    onError: (e: any) => {
      console.log(e);
    }
  });
}
