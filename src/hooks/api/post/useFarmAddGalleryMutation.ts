import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmService, NewCommunityFarmGallery } from "@api/openapi";

import { VIEW_FARM_GALLERY_KEY } from "../get/useGetFarmGalleryQuery";

const FARM_ADD_GALLERY_KEY = () => "FARM_ADD_GALLERY";

export default function useFarmAddGalleryMutation() {
  const queryClient = useQueryClient();

  return useMutation([FARM_ADD_GALLERY_KEY()], {
    mutationFn: async (data: NewCommunityFarmGallery) => {
      const response = await FarmService.postApiFarmCommunityFarmGallery({
        formData: data
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [VIEW_FARM_GALLERY_KEY()] });
    }
  });
}
