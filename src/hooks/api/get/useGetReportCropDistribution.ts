import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";
export const GET_REPORT_CROP_DISTRIBUTION = () =>
  "GET_REPORT_CROP_DISTRIBUTION_KEY";
interface GraphProps {
  month: string;
  limit?: string;
}
export default function useGetReportCropDistribution(data: GraphProps) {
  return useQuery({
    queryKey: [GET_REPORT_CROP_DISTRIBUTION(), data.month, data.limit],
    queryFn: async () => {
      const response =
        await ReportsService.getApiReportsAnalyticsCropDistribution(data);
      return response;
    },
    keepPreviousData: true
  });
}
