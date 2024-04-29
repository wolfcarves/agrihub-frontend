import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  CommunityFarmService,
  UpdateApplicationStatusRequest
} from "@api/openapi";

import { GET_COMMUNITY_FARM_APPLICATION_VIEW } from "../get/useGetCommunityFarmApplicationView";

const usePutCommunityFarmApplicationStatusUpdateKey = () =>
  "USE_COMMUNITY_FARM_APPLICATION_STATUS_UPDATE_KEY";
type DataSchema = {
  id: string;
  requestBody: UpdateApplicationStatusRequest;
};
export default function usePutCommunityFarmApplicationStatusUpdate() {
  const queryClient = useQueryClient();

  return useMutation([usePutCommunityFarmApplicationStatusUpdateKey()], {
    async mutationFn(data: DataSchema) {
      const response =
        await CommunityFarmService.putApiCommunityFarmMemberApplicationUpdate(
          data
        );

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_COMMUNITY_FARM_APPLICATION_VIEW()]);
    }
  });
}
