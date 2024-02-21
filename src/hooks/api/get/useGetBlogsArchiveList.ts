import { useQuery } from "@tanstack/react-query";
import { BlogsService } from "../../../api/openapi";

export const GET_BLOGS_ARCHIVE_LIST = () => "GET_BLOGS_ARCHIVE_LIST_KEY";

export default function useGetBlogsArchiveList(
  search?: string,
  page?: string,
  perpage?: string
) {
  return useQuery({
    queryKey: [GET_BLOGS_ARCHIVE_LIST()],
    queryFn: async () => {
      const data = await BlogsService.getApiBlogsArchivedList({
        search,
        page,
        perpage
      });
      return data;
    },
    keepPreviousData: true
  });
}
