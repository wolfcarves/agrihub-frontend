import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "@api/openapi";
export const GET_REPORT_FAVOURITE_CROPS = () =>
  "GET_REPORT_FAVOURITE_CROPS_KEY";

export default function useGetReportFavouriteCrops() {
  return useQuery({
    queryKey: [GET_REPORT_FAVOURITE_CROPS()],
    queryFn: async () => {
      const data = await ReportsService.getApiReportsAdminFavouriteCrops();
      return data;
    },
    keepPreviousData: true
  });
}
