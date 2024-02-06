import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "@api/openapi";

export const GET_REPORT_CROP_LIST_VIEW_KEY = () =>
  "GET_REPORT_CROP_LIST_VIEW_KEY";

export default function useGetReportCropListView(id: string) {
  return useQuery({
    queryKey: [GET_REPORT_CROP_LIST_VIEW_KEY(), id],
    queryFn: async () => {
      const data = await ReportsService.getApiReportsCropReportView({ id });

      return data;
    }
  });
}
