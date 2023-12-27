import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AccountService } from "@api/openapi";
import { UserProfile } from "@api/openapi";
import { GET_USER_KEY } from "../get/useGetMyProfileQuery";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useUserFinalSetupKey = () => "FINAL_SETUP";

export default function useUserFinalSetup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation([useUserFinalSetupKey()], {
    mutationFn: async (data: UserProfile) => {
      const response = await AccountService.postApiAccountSetupProfile(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_USER_KEY()] });
      navigate("/forums");
    }
  });
}
