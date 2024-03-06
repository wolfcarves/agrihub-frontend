import { useQuery } from "@tanstack/react-query";
import { FarmProblemsService } from "@api/openapi";

export const GET_FARM_PROBLEMS_VIEW = () => "GET_FARM_PROBLEMS_VIEW_KEY";

export default function useGetProblemsFarmById(id: string) {
  return useQuery({
    queryKey: [GET_FARM_PROBLEMS_VIEW(), id],
    queryFn: async () => {
      const data = await FarmProblemsService.getApiFarmProblems({ id });
      return data;
    }
  });
}
