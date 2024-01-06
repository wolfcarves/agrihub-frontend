import { useQuery } from "@tanstack/react-query";
import { ForumsService } from "../../../api/openapi";

export type SearchParams = {
  search?: string;
  page?: string;
  perpage?: string;
  filter?: "newest" | "active" | "trending";
  profile?: string;
};

export const GET_QUESTION = (
  page: string | undefined,
  filter: SearchParams["filter"]
) => ["GET_QUESTION_KEY", page, filter];

export default function useGetQuestionsQuery(data: SearchParams) {
  return useQuery({
    queryKey: [GET_QUESTION(data.page, data.filter), data.page, data.filter],
    queryFn: async () => {
      const response = await ForumsService.getApiForums(data);

      return response;
    }
  });
}
