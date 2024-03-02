import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CropService, NewCropRequest } from "@api/openapi";
import { GET_CROP } from "../get/useGetCropsQuery";

const useCropCreateKey = () => "CREATE_CROP_KEY";

type DataSchema = {
  formData: NewCropRequest
};

export default function useCropCreate() {
  const queryClient = useQueryClient();

  return useMutation([useCropCreateKey()], {
    async mutationFn(data: DataSchema) {
      const response = await CropService.postApiFarmCrop(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_CROP()]
      });
    }
  });
}
