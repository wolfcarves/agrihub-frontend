import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthService, UserLoginSchema } from "@api/openapi";
import { GET_USER_KEY } from "../get/useGetMyProfileQuery";
import { useNavigate } from "react-router-dom";

const useLoginUserKey = () => "user_login";

export default function useLoginUserMutation() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation([useLoginUserKey()], {
    async mutationFn(data: UserLoginSchema) {
      const response = await AuthService.postApiAuthLogin(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_USER_KEY()] });
      navigate("/questions");
    },
    onError: (e: any) => {
      console.log(e);
    }
  });
}
