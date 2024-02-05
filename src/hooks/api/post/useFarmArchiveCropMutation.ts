import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmService } from "@api/openapi";
import { VIEW_FARM_CROPS_KEY } from "../get/useGetFarmCropsQuery";

const useFarmArchiveCropMutationKey = () => "FARM_CROP_ARCHIVE_KEY";

export default function useFarmArchiveCropMutation() {
  const queryClient = useQueryClient();

  return useMutation([useFarmArchiveCropMutationKey()], {
    async mutationFn(id: string) {
      const response = await FarmService.deleteApiFarmCommunityFarmCropArchive({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [VIEW_FARM_CROPS_KEY()] });
    }
  });
}
