import { useInfiniteQuery } from "@tanstack/react-query";
import { ForumsService } from "@api/openapi";

export type SearchParams = {
  search?: string;
  page?: string;
  perpage?: string;
  filter?: "newest" | "active" | "trending";
  profile?: string;
};

export const GET_QUESTIONS_INFINITE_QUERY_KEY = () =>
  "GET_QUESTIONS_INFINITE_QUERY_KEY";

export default function useGetQuestionsInfiniteQuery(data: SearchParams) {
  return useInfiniteQuery({
    queryKey: [GET_QUESTIONS_INFINITE_QUERY_KEY(), data.page, data.filter],
    queryFn: async ({ pageParam: page = 1 }) => {
      const response = await ForumsService.getApiForums({
        ...data,
        perpage: "3",
        page: String(page)
      });

      return response;
    },
    getNextPageParam: lastPage => {
      const currentPage = lastPage.pagination?.page ?? 1;
      const totalPages = lastPage.pagination?.total_pages ?? 1;

      if (currentPage >= totalPages) {
        return undefined;
      }

      const nextCursor = currentPage ? currentPage + 1 : 1;

      return nextCursor;
    },
    cacheTime: 0,
    staleTime: 0
  });
}
