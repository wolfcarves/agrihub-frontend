import { useQuery } from "@tanstack/react-query";
import { CmsService } from "../../../api/openapi";
export const GET_VISION_STATS = () =>
  "GET_VISION_STATS_KEY";

export default function useGetVisionStats() {
  return useQuery({
    queryKey: [GET_VISION_STATS()],
    queryFn: async () => {
      const data =
        await CmsService.getApiCmsVisionStats();
      return data;
    },
    keepPreviousData: true
  });
}
