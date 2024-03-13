import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmService } from "@api/openapi";
import { GET_FARM_LIST_QUERY } from "../get/useGetFarmListQuery";

const useDeleteCommunityArchiveKey = () => "DELETE_COMMUNITY_ARCHIVE_KEY";

export default function useDeleteCommunityArchive() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteCommunityArchiveKey()], {
    async mutationFn(id: string) {
      const response = await FarmService.deleteApiFarmCommunityFarmArchived({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_FARM_LIST_QUERY()] });
    }
  });
}
