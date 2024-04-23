import { data } from "./../../../pages/admin/resources/table/columns-blog";
import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";

export const GET_INACTIVE_FARM_LIST = () => "GET_INACTIVE_FARM_LIST_KEY";
interface ApplicationsParams {
  search?: string;
  page?: string;
  perpage?: string;
}
export default function useGetReportInactiveFarmList(data: ApplicationsParams) {
  return useQuery({
    queryKey: [GET_INACTIVE_FARM_LIST(), ...[data]],
    queryFn: async () => {
      const response = await ReportsService.getApiReportsFarmInactive(data);
      return response;
    }
  });
}
