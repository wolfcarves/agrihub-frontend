import { useQuery } from "@tanstack/react-query";
import { ForumsService } from "../../../api/openapi";
export const VIEW_QUESTION = () => "VIEW_QUESTION_KEY";
export default function useGetViewQuestion(id: string, page?: string) {
  return useQuery({
    queryKey: [VIEW_QUESTION(), id, page],
    queryFn: async () => {
      const data = await ForumsService.getApiForums1(id, page);
      return data;
    },
    keepPreviousData: true
  });
}
