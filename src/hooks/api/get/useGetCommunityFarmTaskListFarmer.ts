import { useQuery } from "@tanstack/react-query";
import { CommunityFarmTasksService } from "../../../api/openapi";

export const GET_COMMUNITY_FARM_TASK_FARMER_LIST = () =>
  "GET_COMMUNITY_FARM_TASK_FARMER_LIST_KEY";
interface CropsReportParams {
  id: string;
  search?: string;
  page?: string;
  perpage?: string;
  filter?: "completed" | "pending";
  type?: "plant" | "harvest";
}
export default function useGetCommunityFarmTaskListFarmer(
  data: CropsReportParams
) {
  return useQuery({
    queryKey: [GET_COMMUNITY_FARM_TASK_FARMER_LIST(), ...[data]],
    queryFn: async () => {
      const response =
        await CommunityFarmTasksService.getApiCommunityFarmTaskListFarmer(data);

      return response;
    }
  });
}
