import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  CommunityFarmReportsService,
  PlantedCropReportFormData
} from "@api/openapi";
import { GET_COMMUNITY_FARM_REPORTS_CROP_REPORT_LIST } from "../get/useGetCommunityFarmReportsCropReports";

const useCommunityFarmReportPlantedKey = () =>
  "USE_COMMUNITY_FARM_REPORT_PLANTED_KEY";
type DataSchema = {
  id: string;
  formData: PlantedCropReportFormData;
};
export default function useCommunityFarmReportPlanted() {
  const queryClient = useQueryClient();

  return useMutation([useCommunityFarmReportPlantedKey()], {
    async mutationFn(data: DataSchema) {
      const response =
        await CommunityFarmReportsService.postApiCommunityFarmCropReportPlanted(
          data
        );

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([
        GET_COMMUNITY_FARM_REPORTS_CROP_REPORT_LIST()
      ]);
    }
  });
}
