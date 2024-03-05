import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmService } from "@api/openapi";
import { GET_FARM_MEMBERS } from "../get/useGetFarmMembersQuery";

const useFarmLeaveKey = () => "FARM_LEAVE_KEY";

export default function useFarmLeaveMutation() {
  const queryClient = useQueryClient();

  return useMutation([useFarmLeaveKey()], {
    async mutationFn() {
      const response = await FarmService.postApiFarmCommunityLeave();

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_FARM_MEMBERS()] });
    }
  });
}
