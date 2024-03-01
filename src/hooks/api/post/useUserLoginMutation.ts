import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthService, UserLoginSchema } from "@api/openapi";
import { GET_MY_PROFILE_KEY } from "../get/useGetMyProfileQuery";
import { useNavigate } from "react-router-dom";

export const LOGIN_USER_KEY = () => "LOGIN_USER_KEY";

export default function useLoginUserMutation() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation([LOGIN_USER_KEY()], {
    async mutationFn(data: UserLoginSchema) {
      const response = await AuthService.postApiAuthLogin({
        requestBody: data
      });

      return response;
    },
    onSuccess: ({ user }) => {
      queryClient.invalidateQueries({ queryKey: [GET_MY_PROFILE_KEY()] });

      if (user?.role === "admin" || "asst_admin") {
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
