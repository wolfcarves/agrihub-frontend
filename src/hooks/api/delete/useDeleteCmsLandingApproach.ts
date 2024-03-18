import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BlogsService, CmsService, EventsService } from "@api/openapi";
import { GET_BLOGS_PUBLISH_LIST } from "../get/useGetBlogsPublishListQuery";
import { GET_CMS_LANDING_DETAILS } from "../get/useGetCmsLandingDetails";

const useDeleteCmsLandingApproachKey = () => "DELETE_CMS_LANDING_APPROACH_KEY";

export default function useDeleteCmsLandingApproach() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteCmsLandingApproachKey()], {
    async mutationFn(id: string) {
      const response = await CmsService.deleteApiCmsLandingDeleteApproach({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_CMS_LANDING_DETAILS()]);
    }
  });
}
