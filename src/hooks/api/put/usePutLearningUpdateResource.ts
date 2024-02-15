import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LearningMaterialsService, NewLearningResource } from "@api/openapi";
import { GET_LEARNING_VIEW } from "../get/useGetLearningView";

const usePutLearningUpdateResourceKey = () =>
  "PUT_LEARNING_RESOURCE_UPDATE_KEY";

type DataSchema = {
  formData: NewLearningResource;
  id: string;
};

export default function usePutLearningUpdateResource() {
  const queryClient = useQueryClient();

  return useMutation([usePutLearningUpdateResourceKey()], {
    async mutationFn(data: DataSchema) {
      const response =
        await LearningMaterialsService.putApiLearningUpdateResource(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_LEARNING_VIEW()] });
    }
  });
}
