import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthService, UserLoginSchema } from "@api/openapi";
import { GET_MY_PROFILE_KEY } from "../get/useGetMyProfileQuery";
import { useNavigate } from "react-router-dom";

const useLoginUserKey = () => "user_login";

export default function useLoginUserMutation() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation([useLoginUserKey()], {
    async mutationFn(data: UserLoginSchema) {
      const response = await AuthService.postApiAuthLogin({
        requestBody: data
      });

      return response;
    },
    onSuccess: ({ user }) => {
      queryClient.invalidateQueries({ queryKey: [GET_MY_PROFILE_KEY()] });

      if (user?.role === "admin") {
        navigate("/admin/dashboard", { replace: true });
      }

      if (user?.role === "member") {
        navigate("/");
      }

      if (
        user?.role === "farm_head" ||
        user?.role === "subfarm_head" ||
        user?.role === "farmer"
      ) {
        navigate("/community");
      }
    }
  });
}
