import { useQuery } from "@tanstack/react-query";
import { ForumsService, ReportsService } from "@api/openapi";

export type SearchParams = {
  search?: string;
  page?: string;
  perpage?: string;
};

export const GET_QUESTION_REPORTED_KEY = () => "GET_QUESTION_REPORTED_KEY";
export default function useGetQuestionReported(data: SearchParams) {
  return useQuery({
    queryKey: [GET_QUESTION_REPORTED_KEY(), ...[data]],
    queryFn: async () => {
      const response = await ReportsService.getApiForumsReportedQuestions(data);

      return response;
    }
  });
}
