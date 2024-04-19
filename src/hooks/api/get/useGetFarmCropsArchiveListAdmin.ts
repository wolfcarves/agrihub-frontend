import { useQuery } from "@tanstack/react-query";
import { FarmService, ReportsService } from "../../../api/openapi";

export const GET_CROP_ARCHIVE_LIST_ADMIN = () =>
  "GET_CROP_ARCHIVE_LIST_ADMIN_KEY";

export default function useGetFarmCropsArchiveListAdmin() {
  return useQuery({
    queryKey: [GET_CROP_ARCHIVE_LIST_ADMIN()],
    queryFn: async () => {
      const response = await FarmService.getApiFarmCropFindArchived();
      return response;
    }
  });
}
