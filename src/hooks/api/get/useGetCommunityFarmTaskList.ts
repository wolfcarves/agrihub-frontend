import { useQuery } from "@tanstack/react-query";
import { CommunityFarmTasksService } from "../../../api/openapi";

export const GET_COMMUNITY_FARM_TASK_LIST = () =>
  "GET_COMMUNITY_FARM_TASK_LIST_KEY";
interface CropsReportParams {
  id: string;
  search?: string;
  page?: string;
  perpage?: string;
  filter?: "completed" | "pending";
  type?: "plant" | "harvest";
}
export default function useGetCommunityFarmTaskList(data: CropsReportParams) {
  return useQuery({
    queryKey: [GET_COMMUNITY_FARM_TASK_LIST(), ...[data]],
    queryFn: async () => {
      const response =
        await CommunityFarmTasksService.getApiCommunityFarmTaskList(data);

      return response;
    }
  });
}
