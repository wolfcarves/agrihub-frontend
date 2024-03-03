import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CropService, UpdateCropRequest } from "@api/openapi";
import { GET_CROP } from "../get/useGetCropsQuery";

const usePutCropsKey = () => "PUT_CROPS_KEY";

type DataSchema = {
  id: string;
  requestBody: UpdateCropRequest;
};

export default function usePutCrops() {
  const queryClient = useQueryClient();

  return useMutation([usePutCropsKey()], {
    async mutationFn(data: DataSchema) {
      const response = await CropService.putApiFarmCropUpdate(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_CROP()]);
    }
  });
}
