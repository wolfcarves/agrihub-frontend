import { useQuery } from "@tanstack/react-query";
import { FarmService } from "../../../api/openapi";
export const GET_CROP_ARCHIVE = () => "GET_CROP_ARCHIVE_KEY";

export default function useGetFarmCropsArchiveList() {
  return useQuery({
    queryKey: [GET_CROP_ARCHIVE()],
    queryFn: async () => {
      const data = await FarmService.getApiFarmCommunityFarmCropArchivedList();
      return data;
    },
    keepPreviousData: true
  });
}
