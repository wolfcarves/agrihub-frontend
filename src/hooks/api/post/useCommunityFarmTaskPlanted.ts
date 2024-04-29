import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CommunityFarmTasksService, NewPlantTask } from "@api/openapi";
import { GET_COMMUNITY_FARM_TASK_LIST } from "../get/useGetCommunityFarmTaskList";

const useCommunityFarmTaskPlantedKey = () =>
  "USE_COMMUNITY_FARM_TASK_PLANTED_KEY";
type DataSchema = {
  id: string;
  requestBody: NewPlantTask;
};
export default function useCommunityFarmTaskPlanted() {
  const queryClient = useQueryClient();

  return useMutation([useCommunityFarmTaskPlantedKey()], {
    async mutationFn(data: DataSchema) {
      const response =
        await CommunityFarmTasksService.postApiCommunityFarmTaskPlanted(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_COMMUNITY_FARM_TASK_LIST()]);
    }
  });
}
