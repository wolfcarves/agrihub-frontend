import { useQuery } from "@tanstack/react-query";
import { BlogsService } from "../../../api/openapi";

export const GET_BLOGS_PUBLISH_LIST = () => "GET_BLOGS_PUBLISH_LIST_KEY";

export default function useGetBlogsPublishList(
  search?: string,
  page?: string,
  perpage?: string
) {
  return useQuery({
    queryKey: [GET_BLOGS_PUBLISH_LIST()],
    queryFn: async () => {
      const data = await BlogsService.getApiBlogsPublishedList({
        search,
        page,
        perpage
      });
      return data;
    },
    keepPreviousData: true
  });
}
