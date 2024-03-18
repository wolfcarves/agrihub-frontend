import { useQuery } from "@tanstack/react-query";
import { CmsService } from "@api/openapi";

export const GET_CMS_LANDING_DETAILS = () => "GET_CMS_LANDING_DETAILS_KEY";

export default function useGetCmsLandingDetails() {
  return useQuery({
    queryKey: [GET_CMS_LANDING_DETAILS()],
    queryFn: async () => {
      const data = await CmsService.getApiCmsLandingDetails();
      return data;
    }
  });
}
