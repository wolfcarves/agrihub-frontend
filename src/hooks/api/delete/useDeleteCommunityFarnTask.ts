import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CommunityFarmTasksService, TagsService } from "@api/openapi";
import { useGetTagsQueryKey } from "../get/useGetTagsQuery";
import { GET_COMMUNITY_FARM_TASK_LIST } from "../get/useGetCommunityFarmTaskList";

const useDeleteCommunityFarmTaskKey = () => "DELETE_COMMUNITY_FARM_TASK";

export default function useDeleteCommunityFarmTask() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteCommunityFarmTaskKey()], {
    async mutationFn(id: string) {
      const response =
        await CommunityFarmTasksService.deleteApiCommunityFarmTaskDelete({
          id
        });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_COMMUNITY_FARM_TASK_LIST()]);
    }
  });
}
