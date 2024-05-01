import { useQuery } from "@tanstack/react-query";
import { ForumsService } from "@api/openapi";

export type SearchParams = {
  search?: string;
  page?: string;
  perpage?: string;
  filter?: "newest" | "active" | "trending";
  profile?: string;
  tag?: string;
  privateForum?: boolean;
};

export const GET_QUESTION_KEY = () => "GET_QUESTION_KEY";

export default function useGetQuestionsQuery(data: SearchParams) {
  return useQuery({
    queryKey: [GET_QUESTION_KEY(), ...[data]],
    queryFn: async () => {
      const response = await ForumsService.getApiForums(data);

      return response;
    }
  });
}
