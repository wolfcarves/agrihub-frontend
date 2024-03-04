import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  FarmProblemsService,
  MarkProblemAsResolvedRequest
} from "@api/openapi";
import { GET_COMMUNITY_PROBLEM_LIST } from "../get/useGetProblemsCommunityList";

const useProblemsCommunityResolveKey = () =>
  "USE_COMMUNITY_PROBLEMS_RESOLVE_KEY";
type DataSchema = {
  id: string;
  requestBody: MarkProblemAsResolvedRequest;
};
export default function useProblemsCommunityResolve() {
  const queryClient = useQueryClient();

  return useMutation([useProblemsCommunityResolveKey()], {
    async mutationFn(data: DataSchema) {
      const response =
        await FarmProblemsService.postApiFarmProblemsCommunityResolve(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_COMMUNITY_PROBLEM_LIST()]);
    }
  });
}
