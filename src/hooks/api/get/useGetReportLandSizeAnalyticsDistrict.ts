import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";
export const GET_REPORT_LAND_SIZE_ANALYTICS_DISTRICT = () =>
  "GET_REPORT_LAND_SIZE_ANALYTICS_DISTRICT_KEY";
interface GraphProps {
  district?:
    | "District 1"
    | "District 2"
    | "District 3"
    | "District 4"
    | "District 5"
    | "District 6";

  limit?: number;
}
export default function useGetReportLandSizeAnalyticsDistrict(
  data: GraphProps
) {
  return useQuery({
    queryKey: [
      GET_REPORT_LAND_SIZE_ANALYTICS_DISTRICT(),
      data.district,
      data.limit
    ],
    queryFn: async () => {
      const response =
        await ReportsService.getApiReportsFarmLandSizeAnalyticsDistrict(data);
      return response;
    },
    keepPreviousData: true
  });
}
