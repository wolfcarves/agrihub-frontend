import { useQuery } from "@tanstack/react-query";
import { ForumsService } from "../../../api/openapi";
export const GET_QUESTION = (top: string | undefined) =>
  `GET_QUESTION_KEY${top || ""}`;
export default function useGetQuestions(
  search?: string,
  page?: string,
  perpage?: string,
  filter?: "newest" | "active" | "trending",
  top?: string,
  profile?: string
) {
  return useQuery({
    queryKey: [GET_QUESTION(top), page, search, filter, profile],
    queryFn: async () => {
      const data = await ForumsService.getApiForums(
        search,
        page,
        perpage,
        filter,
        profile
      );
      return data;
    },
    keepPreviousData: true
  });
}
