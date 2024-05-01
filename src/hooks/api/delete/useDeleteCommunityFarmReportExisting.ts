import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  CommunityFarmEventsService,
  CommunityFarmReportsService
} from "@api/openapi";
import { GET_COMMUNITY_FARM_EVENT_LIST } from "../get/useGetCommunityFarmEventList";
import { GET_COMMUNITY_FARM_REPORTS_CROP_REPORT_LIST } from "../get/useGetCommunityFarmReportsCropReports";

const useDeleteCommunityFarmReportExistingKey = () =>
  "DELETE_COMMUNITY_FARM_REPORT_EXISTING_KEY";

export default function useDeleteCommunityFarmReportExisting() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteCommunityFarmReportExistingKey()], {
    async mutationFn(id: string) {
      const response =
        await CommunityFarmReportsService.deleteApiCommunityFarmRemoveExistingReport(
          {
            id
          }
        );

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_COMMUNITY_FARM_REPORTS_CROP_REPORT_LIST()]
      });
    }
  });
}
