import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CommunityFarmTasksService, NewHarvestTask } from "@api/openapi";
import { GET_COMMUNITY_FARM_TASK_LIST } from "../get/useGetCommunityFarmTaskList";

const useCommunityFarmTaskHarvestKey = () =>
  "USE_COMMUNITY_FARM_TASK_HARVEST_KEY";
type DataSchema = {
  id: string;
  requestBody: NewHarvestTask;
};
export default function useCommunityFarmTaskHarvest() {
  const queryClient = useQueryClient();

  return useMutation([useCommunityFarmTaskHarvestKey()], {
    async mutationFn(data: DataSchema) {
      const response =
        await CommunityFarmTasksService.postApiCommunityFarmTaskHarvest(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_COMMUNITY_FARM_TASK_LIST()]);
    }
  });
}
