import { useQuery } from "@tanstack/react-query";
import { ForumsService } from "../../../api/openapi";

export type SearchParams = {
  search?: string;
  page?: string;
  perpage?: string;
  filter?: "newest" | "active" | "trending";
  profile?: string;
};

export const GET_QUESTION = (page: string | undefined) => [
  "GET_QUESTION_KEY",
  page
];

export default function useGetQuestionsQuery(data: SearchParams) {
  return useQuery({
    queryKey: GET_QUESTION(data.page),
    queryFn: async () => {
      const response = await ForumsService.getApiForums(data);

      return response;
    },
    keepPreviousData: true
  });
}
