import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmService } from "@api/openapi";
import { VIEW_FARM_CROPS_KEY } from "../get/useGetFarmCropsQuery";

const useFarmAddCropMutationKey = () => "COMMUNITY_FARM_ADD_CROP_KEY";

type MutationData = {
  farmId: string;
  cropId: string;
};

export default function useFarmAddCropMutation() {
  const queryClient = useQueryClient();

  return useMutation([useFarmAddCropMutationKey()], {
    async mutationFn(data: MutationData) {
      const { farmId, cropId } = data;

      const response = await FarmService.postApiFarmCommunityFarmCrop({
        farmId,
        cropId
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [VIEW_FARM_CROPS_KEY()] });
    }
  });
}
