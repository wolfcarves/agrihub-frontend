import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CmsService } from "@api/openapi";
import { GET_CMS_LANDING_DETAILS } from "../get/useGetCmsLandingDetails";

const useDeleteCmsLandingImageKey = () => "DELETE_CMS_LANDING_IMAGE_KEY";

export default function useDeleteCmsLandingImage() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteCmsLandingImageKey()], {
    async mutationFn(id: string) {
      const response = await CmsService.deleteApiCmsLandingDeleteImage({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_CMS_LANDING_DETAILS()]);
    }
  });
}
