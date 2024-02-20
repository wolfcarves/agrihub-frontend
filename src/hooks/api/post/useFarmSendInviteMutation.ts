import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmService } from "@api/openapi";

const useFarmSendInviteMutationKey = () => "COMMUNITY_FARM_SEND_INVITE_KEY";

type MutationData = {
  userid: string;
  expiresat: string;
};

export default function useFarmSendInviteMutation() {
  const queryClient = useQueryClient();

  return useMutation([useFarmSendInviteMutationKey()], {
    async mutationFn(requestBody: MutationData) {
      const { userid, expiresat } = requestBody;
      const response = await FarmService.postApiFarmFarmerInvitation({
        requestBody: {
          userid,
          expiresat
        }
      });
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [] });
    }
  });
}
