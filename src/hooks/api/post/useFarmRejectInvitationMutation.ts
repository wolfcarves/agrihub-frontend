import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmService } from "@api/openapi";
import { GET_MY_PROFILE_KEY } from "../get/useGetMyProfileQuery";

const useFarmRejectInvitationKey = () => "FARM_REJECT_INVITATION_KEY";

export default function useFarmRejectInvitationMutation() {
  const queryClient = useQueryClient();

  return useMutation([useFarmRejectInvitationKey()], {
    async mutationFn(id: string) {
      const response = await FarmService.deleteApiFarmFarmerInvitationReject({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_MY_PROFILE_KEY()] });
    }
  });
}
