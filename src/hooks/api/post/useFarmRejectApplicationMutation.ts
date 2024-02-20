import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmService } from "@api/openapi";
import { GET_FARM_APPLICATION } from "../get/useGetFarmApplicationsList";

const useFarmRejectApplicationKey = () => "FARM_REJECT_APPLICATION_KEY";

export default function useFarmRejectApplicationMutation() {
  const queryClient = useQueryClient();

  return useMutation([useFarmRejectApplicationKey()], {
    async mutationFn(id: string) {
      const response = await FarmService.putApiFarmApplicationsReject({ id });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_FARM_APPLICATION()] });
    }
  });
}
