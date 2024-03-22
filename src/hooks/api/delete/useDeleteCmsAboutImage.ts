import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CmsService } from "@api/openapi";
import { GET_CMS_ABOUT_KEY } from "../get/useGetCmsAboutDetails";

const useDeleteCmsAboutImageKey = () => "DELETE_CMS_ABOUT_IMAGE_KEY";

export default function useDeleteCmsAboutImage() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteCmsAboutImageKey()], {
    async mutationFn(id: string) {
      const response = await CmsService.deleteApiCmsAboutDeleteCarousel({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_CMS_ABOUT_KEY()]);
    }
  });
}
