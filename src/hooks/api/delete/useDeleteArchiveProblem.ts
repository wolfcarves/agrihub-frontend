import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmProblemsService } from "@api/openapi";

const useDeleteArchiveProblemKey = () => "DELETE_FARM_PROBLEM_ARCHIVE_KEY";

export default function useDeleteArchiveProblem() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteArchiveProblemKey()], {
    async mutationFn(id: string) {
      const response = await FarmProblemsService.deleteApiFarmProblemsArchive({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([
        "GET_PROBLEM_LIST_COMMON",
        "GET_PROBLEM_LIST_UNUSUAL"
      ]);
    }
  });
}
