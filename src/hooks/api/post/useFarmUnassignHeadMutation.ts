import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmService } from "@api/openapi";
import { GET_FARM_MEMBERS } from "../get/useGetFarmMembersQuery";

const useFarmUassignHeadKey = () => "FARM_UNASSIGN_HEAD_KEY";

export default function useFarmUnassignHeadMutation() {
  const queryClient = useQueryClient();

  return useMutation([useFarmUassignHeadKey()], {
    async mutationFn(id: string) {
      const response = await FarmService.postApiFarmCommunityUnassignHead({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_FARM_MEMBERS()] });
    }
  });
}
