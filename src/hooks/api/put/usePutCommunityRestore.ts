import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmService } from "@api/openapi";
import { GET_FARM_LIST_QUERY } from "../get/useGetFarmListQuery";

const usePutCommunityRestoreKey = () => "DELETE_COMMUNITY_RESTORE_KEY";

export default function usePutCommunityRestore() {
  const queryClient = useQueryClient();

  return useMutation([usePutCommunityRestoreKey()], {
    async mutationFn(id: string) {
      const response = await FarmService.putApiFarmCommunityFarmRestore({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_FARM_LIST_QUERY()] });
    }
  });
}
