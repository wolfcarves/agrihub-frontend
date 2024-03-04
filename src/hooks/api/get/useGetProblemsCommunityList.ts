import { useQuery } from "@tanstack/react-query";
import { FarmProblemsService } from "../../../api/openapi";

export const GET_COMMUNITY_PROBLEM_LIST = () =>
  "GET_COMMUNITY_PROBLEM_LIST_KEY";
interface FormParams {
  search?: string;
  page?: string;
  perpage?: string;
  filter?: "pending" | "resolved";
}
export default function useGetProblemsCommunityList(data: FormParams) {
  return useQuery({
    queryKey: [GET_COMMUNITY_PROBLEM_LIST(), ...[data]],
    queryFn: async () => {
      const response =
        await FarmProblemsService.getApiFarmProblemsCommunityList(data);

      return response;
    }
  });
}
