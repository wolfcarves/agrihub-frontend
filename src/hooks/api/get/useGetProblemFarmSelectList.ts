import { useQuery } from "@tanstack/react-query";
import { FarmProblemsService } from "../../../api/openapi";

export const GET_FARM_SELECT_PROBLEM_LIST = () =>
  "GET_COMMUNITY_PROBLEM_LIST_KEY";
interface FormParams {
  search?: string | undefined;
  page?: string | undefined;
  perpage?: string | undefined;
  filter?: string | undefined;
}
export default function useGetProblemFarmSelectList(data: FormParams) {
  return useQuery({
    queryKey: [GET_FARM_SELECT_PROBLEM_LIST(), ...[data]],
    queryFn: async () => {
      const response = await FarmProblemsService.getApiFarmProblemsList(data);

      return response;
    }
  });
}
