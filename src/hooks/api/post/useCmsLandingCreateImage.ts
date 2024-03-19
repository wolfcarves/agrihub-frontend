import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CmsService } from "@api/openapi";
import { GET_CMS_LANDING_DETAILS } from "../get/useGetCmsLandingDetails";

const useCmsLandingCreateImageKey = () => "CMS_LANDING_CREATE_IMAGE_KEY";

type DataSchema = {
  formData: {
    image?: Blob;
  };
};

export default function useCmsLandingCreateImage() {
  const queryClient = useQueryClient();

  return useMutation([useCmsLandingCreateImageKey()], {
    async mutationFn(data: DataSchema) {
      const response = await CmsService.postApiCmsLandingCreateImage(data);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_CMS_LANDING_DETAILS()] });
    }
  });
}
