import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CmsService, UpdateLandingRequest } from "@api/openapi";
import { GET_CMS_LANDING_DETAILS } from "../get/useGetCmsLandingDetails";

const usePutCmsLandingUpdateKey = () => "PUT_CMS_LANDING_UPDATE_KEY";
type DataSchema = {
  requestBody: UpdateLandingRequest;
};
export default function usePutCmsLandingUpdate() {
  const queryClient = useQueryClient();

  return useMutation([usePutCmsLandingUpdateKey()], {
    async mutationFn(data: DataSchema) {
      const response = await CmsService.putApiCmsLandingUpdate(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_CMS_LANDING_DETAILS()]);
    }
  });
}
