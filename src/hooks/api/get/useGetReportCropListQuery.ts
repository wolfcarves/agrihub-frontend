import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";

export const GET_REPORT_CROP_LIST = () => "GET_REPORT_CROP_LIST_KEY";
interface CropsReportParams {
  id: string;
  search?: string;
  page?: string;
  perpage?: string;
  filter?: Array<string>;
  sort?: string;
  month?: string;
}
export default function useGetReportCropListQuery(data: CropsReportParams) {
  return useQuery({
    queryKey: [GET_REPORT_CROP_LIST(), ...[data]],
    queryFn: async () => {
      const response = await ReportsService.getApiReportsCropReport(data);

      return response;
    }
  });
}
