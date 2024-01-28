import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmService } from "@api/openapi";
import { VIEW_FARM_GALLERY_KEY } from "../get/useGetFarmGalleryQuery";

const useFarmDeleteGalleryKey = () => "FARM_DELETE_GALLERY_KEY";

export default function useFarmDeleteGalleryMutation() {
  const queryClient = useQueryClient();

  return useMutation([useFarmDeleteGalleryKey()], {
    async mutationFn(id: string) {
      const response = await FarmService.deleteApiFarmCommunityFarmGallery({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [VIEW_FARM_GALLERY_KEY()] });
    }
  });
}
