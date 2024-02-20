import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmService, UpdateCommunityFarmRequest } from "@api/openapi";

const PUT_FARM_PROFILE_KEY = () => "FARM_PROFILE_EDIT_KEY";

export default function usePutFarmProfile() {
  const queryClient = useQueryClient();

  return useMutation([PUT_FARM_PROFILE_KEY()], {
    mutationFn: async (data: UpdateCommunityFarmRequest) => {
      const response = await FarmService.putApiFarmCommunityFarmUpdate({
        formData: data
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [] });
    }
  });
}
