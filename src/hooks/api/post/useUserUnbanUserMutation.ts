import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserService } from "@api/openapi";
import { GET_USER_ACTIVE_LIST } from "../get/useGetUserActiveList";

const useUserUnbanUserMutationKey = () => "PUT_USER_UNBAN_KEY";

export default function useUserUnbanUserMutation() {
  const queryClient = useQueryClient();

  return useMutation([useUserUnbanUserMutationKey()], {
    async mutationFn(id: string) {
      const response = await UserService.postApiUserUnban({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_USER_ACTIVE_LIST()]);
    }
  });
}
