import { useQuery } from "@tanstack/react-query";
import { LearningMaterialsService } from "../../../api/openapi";

export const GET_LEARNING_ARCHIVE_LIST = () => "GET_LEARNING_ARCHIIVE_LIST_KEY";

export default function useGetLearningArchiveList(
  search?: string,
  page?: string,
  perpage?: string
) {
  return useQuery({
    queryKey: [GET_LEARNING_ARCHIVE_LIST(), page, search],
    queryFn: async () => {
      const data = await LearningMaterialsService.getApiLearningArchiveList({
        search,
        page,
        perpage
      });
      return data;
    },
    keepPreviousData: true
  });
}
