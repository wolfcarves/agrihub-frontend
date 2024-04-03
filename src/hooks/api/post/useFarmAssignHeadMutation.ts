import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmService } from "@api/openapi";
import { GET_FARM_MEMBERS } from "../get/useGetFarmMembersQuery";

const useFarAssignHeadKey = () => "FARM_ASSIGN_HEAD_KEY";

export default function useFarmAssignHeadMutation() {
  const queryClient = useQueryClient();

  return useMutation([useFarAssignHeadKey()], {
    async mutationFn(id: string) {
      const response = await FarmService.postApiFarmCommunityAssignHead({ id });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_FARM_MEMBERS()] });
    }
  });
}
