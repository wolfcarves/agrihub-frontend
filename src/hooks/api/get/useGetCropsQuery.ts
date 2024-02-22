import { useQuery } from "@tanstack/react-query";
import { FarmService } from "@api/openapi";
export const GET_CROP = () => "GET_CROP_KEY";

export default function useGetCropsQuery() {
  return useQuery({
    queryKey: [GET_CROP()],
    queryFn: async () => {
      const data = await FarmService.getApiFarmCropFind();
      return data;
    },
    keepPreviousData: true
  });
}
