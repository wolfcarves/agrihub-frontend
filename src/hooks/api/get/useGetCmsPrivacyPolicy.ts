import { useQuery } from "@tanstack/react-query";
import { CmsService } from "@api/openapi";

export const GET_CMS_PRIVACY_POLICY_KEY = () => "GET_CMS_PRIVACY_POLICY_KEYS";

export default function useGetCmsPrivacyPolicy() {
  return useQuery({
    queryKey: [GET_CMS_PRIVACY_POLICY_KEY()],
    queryFn: async () => {
      const data = await CmsService.getApiPrivacyPolicy();
      return data;
    }
  });
}
