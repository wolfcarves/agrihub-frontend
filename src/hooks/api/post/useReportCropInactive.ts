import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ReportsService } from "@api/openapi";
import { GET_REPORT_CROP_EXISTING_LIST } from "../get/useGetReportCropExistingList";

const useReportCropInactiveKey = () => "REPORT_INACTIVE_CROP_KEY";

export default function useReportCropInactive() {
  const queryClient = useQueryClient();

  return useMutation([useReportCropInactiveKey()], {
    async mutationFn(id: string) {
      const response = await ReportsService.postApiReportsCropReportInactive({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_REPORT_CROP_EXISTING_LIST()]
      });
    }
  });
}
