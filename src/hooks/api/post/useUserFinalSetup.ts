import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AccountService } from "@api/openapi";
import { UserProfile } from "@api/openapi";
import { GET_USER_KEY } from "../get/useGetMyProfileQuery";

const useUserFinalSetupKey = () => "FINAL_SETUP";

export default function useUserFinalSetup() {
  const queryClient = useQueryClient();

  return useMutation([useUserFinalSetupKey()], {
    mutationFn: async (data: UserProfile) => {
      const response = await AccountService.postApiAccountSetupProfile(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_USER_KEY()] });
    }
  });
}
