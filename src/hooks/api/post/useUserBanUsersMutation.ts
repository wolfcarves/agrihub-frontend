import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EventsService, UserService } from "@api/openapi";
import { GET_USER_BANNED_LIST } from "../get/useGetUserBannedList";

const useUserBanUsersMutationKey = () => "PUT_USER_BAN_KEY";

export default function useUserBanUsersMutation() {
  const queryClient = useQueryClient();

  return useMutation([useUserBanUsersMutationKey()], {
    async mutationFn(id: string) {
      const response = await UserService.postApiUserBan({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_USER_BANNED_LIST()]);
    }
  });
}
