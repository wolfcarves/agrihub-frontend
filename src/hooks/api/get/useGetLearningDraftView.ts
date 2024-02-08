import { useQuery } from "@tanstack/react-query";
import { LearningMaterialsService } from "@api/openapi";

export const GET_LEARNING_DRAFT_VIEW = () => "GET_LEARNING_DRAFT_VIEW_KEY";

export default function useGetLearningDraftView(id: string) {
  return useQuery({
    queryKey: [GET_LEARNING_DRAFT_VIEW(), id],
    queryFn: async () => {
      const data = await LearningMaterialsService.getApiLearningView({ id });
      return data;
    }
  });
}
