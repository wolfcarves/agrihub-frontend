import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmService } from "@api/openapi";
import { GET_FARM_CHECK_EXISTING_APPLICATION_KEY } from "../get/useGetFarmCheckExistingApplication";

const useFarmCancelApplicationKey = () => "FARM_CANCEL_APPLICATION_KEY";

export default function useFarmCancelApplicationMutation() {
  const queryClient = useQueryClient();

  return useMutation([useFarmCancelApplicationKey()], {
    async mutationFn(id: string) {
      const response = await FarmService.deleteApiFarmApplicationsCancel({id});

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_FARM_CHECK_EXISTING_APPLICATION_KEY()] });
    }
  });
}
