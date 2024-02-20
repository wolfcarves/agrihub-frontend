import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmService } from "@api/openapi";
import { GET_MY_PROFILE_KEY } from "../get/useGetMyProfileQuery";

const useFarmAcceptInvitationKey = () => "FARM_ACCEPT_INVITATION_KEY";

export default function useFarmAcceptInvitationMutation() {
  const queryClient = useQueryClient();

  return useMutation([useFarmAcceptInvitationKey()], {
    async mutationFn(id: string) {
      const response = await FarmService.postApiFarmFarmerInvitationAccept({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_MY_PROFILE_KEY()] });
    }
  });
}
