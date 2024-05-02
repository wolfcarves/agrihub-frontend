import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";
export const GET_REPORT_CROP_DISTRIBUTION_COMMUNITY = () =>
  "GET_REPORT_CROP_DISTRIBUTION_KEY";
interface GraphProps {
  id: string;
  month: string;
  limit?: string;
}
export default function useGetReportCropDistributionCommunity(
  data: GraphProps
) {
  return useQuery({
    queryKey: [
      GET_REPORT_CROP_DISTRIBUTION_COMMUNITY(),
      data.month,
      data.limit
    ],
    queryFn: async () => {
      const response =
        await ReportsService.getApiReportsAnalyticsCropDistributionCommunity(
          data
        );
      return response;
    },
    keepPreviousData: true
  });
}
