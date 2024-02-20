import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmService, NewFarmApplication } from "@api/openapi";
import { GET_FARM_APPLICATION } from "../get/useGetFarmApplicationsList";

const useFarmApplicationKey = () => "Farm_Application";

export default function useFarmApplication() {
  const queryClient = useQueryClient();

  return useMutation([useFarmApplicationKey()], {
    mutationFn: async (data: NewFarmApplication) => {
      const response = await FarmService.postApiFarmApply({
        formData: data
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_FARM_APPLICATION()] });
    }
  });
}
