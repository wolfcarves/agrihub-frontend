import { useQuery } from "@tanstack/react-query";
import {
  CommunityFarmReportsService,
  CommunityFarmService,
  ReportsService
} from "../../../api/openapi";

export const GET_COMMUNITY_FARM_REPORTS_HISTORY = () =>
  "GET_COMMUNITY_FARM_REPORTS_HISTORY_KEY";
interface CropsReportParams {
  id: string;
  search?: string;
  page?: string;
  perpage?: string;
  filter?: Array<string>;
  status?: "planted" | "harvested";
  month?: string;
  order?: "asc" | "desc";
  previousId?: string;
}
export default function useGetCommunityFarmReportsHistory(
  data: CropsReportParams
) {
  return useQuery({
    queryKey: [GET_COMMUNITY_FARM_REPORTS_HISTORY(), ...[data]],
    queryFn: async () => {
      const response =
        await CommunityFarmReportsService.getApiCommunityFarmCropReports(data);
      return response;
    }
  });
}
