import { useQuery } from "@tanstack/react-query";
import { BlogsService, EventsService } from "../../../api/openapi";

export const GET_BLOGS_DRAFT_LIST = () => "GET_BLOGS_DRAFT_LIST_KEY";

export default function useGetBlogsDraftList(
  search?: string,
  page?: string,
  perpage?: string
) {
  return useQuery({
    queryKey: [GET_BLOGS_DRAFT_LIST()],
    queryFn: async () => {
      const data = await BlogsService.getApiBlogsDraftList({
        search,
        page,
        perpage
      });
      return data;
    },
    keepPreviousData: true
  });
}
