import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AccountService, UserCompletionSchema } from "@api/openapi";
import { useNavigate } from "react-router-dom";
import { GET_USER_KEY } from "../get/useGetMyProfileQuery";
import useAuth from "@hooks/useAuth";

const useUserSetupAccountKey = () => "SETUP_ACCOUNT";

export default function useUserSetupAccount() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const auth = useAuth();

  return useMutation([useUserSetupAccountKey()], {
    mutationFn: async (data: UserCompletionSchema) => {
      const response =
        await AccountService.postApiAccountProfileCompletion(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_USER_KEY()] });
    }
  });
}
