import { useQuery } from "@tanstack/react-query";
import { CmsService } from "../../../api/openapi";

export const GET_CMS_USER_FEEDBACK_LIST = () =>
  "GET_CMS_USER_FEEDBACK_LIST_KEY";

export default function useGetCmsUserFeedbackList(
  search?: string,
  page?: string,
  perpage?: string
) {
  return useQuery({
    queryKey: [GET_CMS_USER_FEEDBACK_LIST(), search, page, perpage],
    queryFn: async () => {
      const data = await CmsService.getApiCmsUserFeedbacks({
        search,
        page,
        perpage
      });
      return data;
    },
    keepPreviousData: true
  });
}
