import { useQuery } from "@tanstack/react-query";
import { LearningMaterialsService } from "../../../api/openapi";

export const GET_LEARNING_PUBLISHED_LIST = () =>
  "GET_LEARNING_PUBLISHED_LIST_KEY";

export default function useGetLearningPublishedList(
  search?: string,
  page?: string,
  perpage?: string
) {
  return useQuery({
    queryKey: [GET_LEARNING_PUBLISHED_LIST(), page, search],
    queryFn: async () => {
      const data = await LearningMaterialsService.getApiLearningPublished({
        search,
        page,
        perpage
      });
      return data;
    },
    keepPreviousData: true
  });
}
