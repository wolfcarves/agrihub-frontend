import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmService } from "@api/openapi";
import { GET_CROP_ARCHIVE } from "../get/useGetFarmCropsArchiveList";

const usePutFarmCropUnarchiveKey = () => "FARM_CROP_UNARCHIVE_KEY";

export default function usePutFarmCropUnarchive() {
  const queryClient = useQueryClient();

  return useMutation([usePutFarmCropUnarchiveKey()], {
    async mutationFn(id: string) {
      const response = await FarmService.putApiFarmCommunityFarmCropUnarchive({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_CROP_ARCHIVE()] });
    }
  });
}
