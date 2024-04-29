import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  CommunityFarmReportsService,
  HarvestedCropReportFormData
} from "@api/openapi";
import { GET_COMMUNITY_FARM_REPORTS_CROP_REPORT_LIST } from "../get/useGetCommunityFarmReportsCropReports";

const useCommunityFarmReportHarvestKey = () =>
  "USE_COMMUNITY_FARM_REPORT_HARVEST_KEY";
type DataSchema = {
  id: string;
  formData: HarvestedCropReportFormData;
};
export default function useCommunityFarmReportHarvest() {
  const queryClient = useQueryClient();

  return useMutation([useCommunityFarmReportHarvestKey()], {
    async mutationFn(data: DataSchema) {
      const response =
        await CommunityFarmReportsService.postApiCommunityFarmCropReportHarvested(
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
