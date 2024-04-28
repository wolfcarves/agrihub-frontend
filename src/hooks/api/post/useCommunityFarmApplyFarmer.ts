import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CommunityFarmService, FarmMemberApplication } from "@api/openapi";
import { GET_COMMUNITY_FARM_QUESTIONS } from "../get/useGetCommunityFarmQuestions";

const useCommunityFarmApplyFarmerKey = () =>
  "USE_COMMUNITY_FARM_APPLY_FARMER_KEY";
type DataSchema = {
  id: string;
  formData: FarmMemberApplication;
};
export default function useCommunityFarmApplyFarmer() {
  const queryClient = useQueryClient();

  return useMutation([useCommunityFarmApplyFarmerKey()], {
    async mutationFn(data: DataSchema) {
      const response =
        await CommunityFarmService.postApiCommunityFarmMemberApplication(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_COMMUNITY_FARM_QUESTIONS()]);
    }
  });
}
