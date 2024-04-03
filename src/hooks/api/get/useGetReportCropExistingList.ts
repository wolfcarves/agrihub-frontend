import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";

export const GET_REPORT_CROP_EXISTING_LIST = () =>
  "GET_REPORT_CROP_EXISTING_LIST_KEY";
interface ApplicationsParams {
  id: string;
  search?: string;
  page?: string;
  perpage?: string;
  filter?: Array<string>;
  sort?: string;
}
export default function useGetReportCropExistingList(data: ApplicationsParams) {
  return useQuery({
    queryKey: [GET_REPORT_CROP_EXISTING_LIST(), ...[data]],
    queryFn: async () => {
      const response =
        await ReportsService.getApiReportsCropReportExisting(data);
      return response;
    }
  });
}
