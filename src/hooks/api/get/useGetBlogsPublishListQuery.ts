import { useQuery } from "@tanstack/react-query";
import { BlogsService } from "@api/openapi";

export const GET_BLOGS_PUBLISH_LIST = () => "GET_BLOGS_PUBLISH_LIST_KEY";

export default function useGetBlogsPublishList(
  search?: string,
  page?: string,
  perpage?: string
) {
  return useQuery({
    queryKey: [GET_BLOGS_PUBLISH_LIST(), search, page, perpage],
    queryFn: async () => {
      const response = await BlogsService.getApiBlogsPublishedList({
        search,
        page,
        perpage
      });

      return response;
    },
    keepPreviousData: true
  });
}
