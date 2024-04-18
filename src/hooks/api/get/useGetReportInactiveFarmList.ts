import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";

export const GET_INACTIVE_FARM_LIST = () => "GET_INACTIVE_FARM_LIST_KEY";
interface ApplicationsParams {
  id: string;
  search?: string;
  page?: string;
  perpage?: string;
  filter?: Array<string>;
  sort?: string;
}
export default function useGetReportInactiveFarmList() {
  return useQuery({
    queryKey: [GET_INACTIVE_FARM_LIST()],
    queryFn: async () => {
      const response = await ReportsService.getApiReportsFarmInactive();
      return response;
    }
  });
}
