import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserService } from "@api/openapi";
import { GET_USER_ACTIVE_LIST } from "../get/useGetUserActiveList";

const useUserWarnUsersMutationKey = () => "PUT_USER_WARN_KEY";

export default function useUserWarnUsersMutation() {
  const queryClient = useQueryClient();

  return useMutation([useUserWarnUsersMutationKey()], {
    async mutationFn(id: string) {
      const response = await UserService.postApiUserWarn({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_USER_ACTIVE_LIST()]);
    }
  });
}
