import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CmsService, UpdateApproachRequest } from "@api/openapi";
import { GET_CMS_LANDING_DETAILS } from "../get/useGetCmsLandingDetails";

const useCmsLandingUpdateApproachKey = () =>
  "PUT_CMS_LANDING_UPDATE_APPROACH_KEY";
type DataSchema = {
  requestBody: UpdateApproachRequest;
};
export default function useCmsLandingUpdateApproach() {
  const queryClient = useQueryClient();

  return useMutation([useCmsLandingUpdateApproachKey()], {
    async mutationFn(data: DataSchema) {
      const response = await CmsService.postApiCmsLandingUpdateApproach(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_CMS_LANDING_DETAILS()]);
    }
  });
}
