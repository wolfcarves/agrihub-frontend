import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BlogsService, FarmService } from "@api/openapi";
import { GET_FARM_MEMBERS } from "../get/useGetFarmMembersQuery";

const useFarmKickMemberKey = () => "FARM_KICK_MEMBER_KEY";

export default function useFarmKickMember() {
  const queryClient = useQueryClient();

  return useMutation([useFarmKickMemberKey()], {
    async mutationFn(id: string) {
      const response = await FarmService.postApiFarmCommunityKick({ id });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_FARM_MEMBERS()] });
    }
  });
}
