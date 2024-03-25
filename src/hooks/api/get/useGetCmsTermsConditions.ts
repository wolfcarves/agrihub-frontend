import { useQuery } from "@tanstack/react-query";
import { CmsService } from "@api/openapi";

export const GET_CMS_TERMS_CONDITIONS_KEY = () =>
  "GET_CMS_TERMS_CONDITIONS_KEYS";

export default function useGetCmsTermsConditions() {
  return useQuery({
    queryKey: [GET_CMS_TERMS_CONDITIONS_KEY()],
    queryFn: async () => {
      const data = await CmsService.getApiTermsConditions();
      return data;
    }
  });
}
