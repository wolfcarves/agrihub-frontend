import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmProblemsService, ReportRequestBody } from "@api/openapi";
import { GET_COMMUNITY_PROBLEM_LIST } from "../get/useGetProblemsCommunityList";

const useProblemsCommunityCreateKey = () => "CREATE_COMMUNITY_PROBLEMS_KEY";

type DataSchema = {
  requestBody: ReportRequestBody;
};

export default function useProblemsCommunityCreate() {
  const queryClient = useQueryClient();

  return useMutation([useProblemsCommunityCreateKey()], {
    async mutationFn(data: DataSchema) {
      const response =
        await FarmProblemsService.postApiFarmProblemsReport(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_COMMUNITY_PROBLEM_LIST()]
      });
    }
  });
}
