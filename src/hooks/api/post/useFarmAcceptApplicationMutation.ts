import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmService } from "@api/openapi";
import { GET_FARM_APPLICATION } from "../get/useGetFarmApplicationsList";

const useFarmAcceptApplicationKey = () => "FARM_ACCEPT_APPLICATION_KEY";

export default function useFarmAcceptApplicationMutation() {
  const queryClient = useQueryClient();

  return useMutation([useFarmAcceptApplicationKey()], {
    async mutationFn(id: string) {
      const response = await FarmService.putApiFarmApplicationsAccept({ id });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_FARM_APPLICATION()] });
    }
  });
}
