import { useQuery } from "@tanstack/react-query";
import {
  CommunityFarmReportsService,
  CommunityFarmService,
  ReportsService
} from "../../../api/openapi";

export const GET_COMMUNITY_FARM_REPORTS_CROP_REPORT_LIST = () =>
  "GET_COMMUNITY_FARM_REPORTS_CROP_REPORT_LIST_KEY";
interface CropsReportParams {
  id: string;
  search?: string;
  page?: string;
  perpage?: string;
  filter?: Array<string>;
  status?: "planted" | "harvested";
  month?: string;
  order?: "asc" | "desc";
}
export default function useGetCommunityFarmReportsCropReports(
  data: CropsReportParams
) {
  return useQuery({
    queryKey: [GET_COMMUNITY_FARM_REPORTS_CROP_REPORT_LIST(), ...[data]],
    queryFn: async () => {
      const response =
        await CommunityFarmReportsService.getApiCommunityFarmCropReports(data);

      return response;
    }
  });
}
