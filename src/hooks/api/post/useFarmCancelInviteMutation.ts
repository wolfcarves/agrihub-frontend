import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmService } from "@api/openapi";

const useFarmCancelInviteKey = () => "FARM_CANCEL_INVITE_KEY";

export default function useFarmCancelInviteMutation() {
  const queryClient = useQueryClient();

  return useMutation([useFarmCancelInviteKey()], {
    async mutationFn(id: string) {
      const response = await FarmService.deleteApiFarmFarmerInvitationCancel({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [] });
    }
  });
}
