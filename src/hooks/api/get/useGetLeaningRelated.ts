import { useQuery } from "@tanstack/react-query";
import { LearningMaterialsService } from "../../../api/openapi";

export const GET_LEARNING_RELATED_LIST = () => "GET_LEARNING_RELATED_LIST_KEY";

export default function useGetLeaningRelated(tags?: Array<string>) {
  return useQuery({
    queryKey: [GET_LEARNING_RELATED_LIST(), tags],
    queryFn: async () => {
      const data = await LearningMaterialsService.getApiLearningRelated({
        tags
      });
      return data;
    },
    keepPreviousData: true
  });
}
