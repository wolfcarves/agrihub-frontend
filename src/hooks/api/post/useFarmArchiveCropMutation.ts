import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmService } from "@api/openapi";
import { GET_CROP_ARCHIVE } from "../get/useGetFarmCropsArchiveList";

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
      queryClient.invalidateQueries({ queryKey: [GET_CROP_ARCHIVE()] });
    }
  });
}
