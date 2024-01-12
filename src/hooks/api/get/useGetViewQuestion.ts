import { useQuery } from "@tanstack/react-query";
import { ForumsService } from "@api/openapi";

export const VIEW_QUESTION_KEY = () => "VIEW_QUESTION_KEY_KEY";

export default function useGetViewQuestion(
  id: string,
  page?: string,
  filter?: "top" | "newest"
) {
  return useQuery({
    queryKey: [VIEW_QUESTION_KEY(), id, page, filter],
    queryFn: async () => {
      const data = await ForumsService.getApiForums1({
        id,
        page,
        filter
      });

      return data;
    }
  });
}
