import { useQuery } from "@tanstack/react-query";
import { LearningMaterialsService } from "@api/openapi";

export const GET_LEARNING_VIEW_PUBLIC = () => "GET_LEARNING_VIEW_PUBLIC_KEY";

export default function useGetLearningViewPublic(id: string) {
  return useQuery({
    queryKey: [GET_LEARNING_VIEW_PUBLIC(), id],
    queryFn: async () => {
      const data = await LearningMaterialsService.getApiLearningViewPublished({
        id
      });
      return data;
    }
  });
}
