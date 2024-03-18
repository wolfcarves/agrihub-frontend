import { useQuery } from "@tanstack/react-query";
import { CmsService } from "@api/openapi";

export const GET_CMS_USER_FEEDBACK_VIEW = () =>
  "GET_CMS_USER_FEEDBACK_VIEW_KEY";

export default function useGetCmsUserFeedbackView(id: string) {
  return useQuery({
    queryKey: [GET_CMS_USER_FEEDBACK_VIEW(), id],
    queryFn: async () => {
      const data = await CmsService.getApiCmsUserFeedbacks1({ id });
      return data;
    }
  });
}
