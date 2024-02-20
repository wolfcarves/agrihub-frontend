import { useQuery } from "@tanstack/react-query";
import { FarmService } from "@api/openapi";

export const VIEW_FARM_GALLERY_KEY = () => "GET_VIEW_GALLERY_KEY";

export default function useGetFarmGalleryQuery(id: string) {
  return useQuery({
    queryKey: [VIEW_FARM_GALLERY_KEY(), id],
    queryFn: async () => {
      const data = await FarmService.getApiFarmCommunityFarmGallery({ id });

      return data;
    }
  });
}
