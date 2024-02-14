import { useQuery } from "@tanstack/react-query";
import { LearningMaterialsService } from "../../../api/openapi";

export const GET_LEARNING_DRAFT_LIST = () => "GET_LEARNING_DRAFT_LIST_KEY";

export default function useGetLearningDraftList(
  search?: string,
  page?: string,
  perpage?: string
) {
  return useQuery({
    queryKey: [GET_LEARNING_DRAFT_LIST(), page, search],
    queryFn: async () => {
      const data = await LearningMaterialsService.getApiLearningDraft({
        search,
        page,
        perpage
      });
      return data;
    },
    keepPreviousData: true
  });
}
