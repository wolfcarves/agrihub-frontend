import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AccountService } from "@api/openapi";
import { UserProfile } from "@api/openapi";
import { GET_MY_PROFILE_KEY } from "../get/useGetMyProfileQuery";
import { useNavigate } from "react-router-dom";

const useUserFinalSetupKey = () => "FINAL_SETUP";

export default function useUserFinalSetup() {
  const queryClient = useQueryClient();

  return useMutation([useUserFinalSetupKey()], {
    mutationFn: async (data: UserProfile) => {
      const response = await AccountService.postApiAccountSetupProfile({
        formData: data
      });

      return response;
    },
    onSuccess: () => {
      const navigate = useNavigate();

      queryClient.invalidateQueries({ queryKey: [GET_MY_PROFILE_KEY()] });

      navigate("/", { replace: true });
    }
  });
}
