import { useQuery } from "@tanstack/react-query";
import { CmsService } from "@api/openapi";

export const GET_CMS_ABOUT_KEY = () => "GET_CMS_ABOUT_KEYS";

export default function useGetCmsAboutDetails() {
  return useQuery({
    queryKey: [GET_CMS_ABOUT_KEY()],
    queryFn: async () => {
      const data = await CmsService.getApiCmsAbout();
      return data;
    }
  });
}
