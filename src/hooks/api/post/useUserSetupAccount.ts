import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AccountService, UserCompletionSchema } from "@api/openapi";
import { GET_MY_PROFILE_KEY } from "../get/useGetMyProfileQuery";

const useUserSetupAccountKey = () => "SETUP_ACCOUNT";

export default function useUserSetupAccount() {
  const queryClient = useQueryClient();

  return useMutation([useUserSetupAccountKey()], {
    mutationFn: async (data: UserCompletionSchema) => {
      const response = await AccountService.postApiAccountProfileCompletion({
        requestBody: data
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_MY_PROFILE_KEY()] });
    }
  });
}
