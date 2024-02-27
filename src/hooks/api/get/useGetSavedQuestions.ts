import { useQuery } from "@tanstack/react-query";
import { ForumsService } from "@api/openapi";

export type SearchParams = {
  search?: string;
  page?: string;
  perpage?: string;
  filter?: "newest" | "active" | "trending";
};

export const GET_SAVED_QUESTION_KEY = () => "GET_SAVED_QUESTION_KEY";

export default function useGetSavedQuestions(data?: SearchParams) {
  return useQuery({
    queryKey: [GET_SAVED_QUESTION_KEY(), data?.page, data?.filter],
    queryFn: async () => {
      const response = await ForumsService.getApiForumsSavedQuestions(
        data ?? {}
      );

      return response;
    }
  });
}
