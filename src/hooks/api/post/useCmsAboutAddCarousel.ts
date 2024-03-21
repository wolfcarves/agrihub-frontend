import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CmsService } from "@api/openapi";
import { GET_CMS_ABOUT_KEY } from "../get/useGetCmsAboutDetails";

const useCmsAboutAddCarouselKey = () => "CMS_ABOUT_ADD_CAROUSEL_KEY";

type DataSchema = {
  formData: {
    image?: Blob;
  };
};

export default function useCmsAboutAddCarousel() {
  const queryClient = useQueryClient();

  return useMutation([useCmsAboutAddCarouselKey()], {
    async mutationFn(data: DataSchema) {
      const response = await CmsService.postApiCmsAboutAddCarousel(data);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_CMS_ABOUT_KEY()] });
    }
  });
}
