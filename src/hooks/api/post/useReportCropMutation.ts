import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NewCommunityCropReport, ReportsService } from "@api/openapi";

import { GET_REPORT_CROP_LIST } from "../get/useGetReportCropListQuery";

const REPORT_ADD_CROPS_KEY = () => "REPORT_ADD_CROPS";

export default function useReportCropMutation() {
  const queryClient = useQueryClient();

  return useMutation([REPORT_ADD_CROPS_KEY()], {
    mutationFn: async (data: NewCommunityCropReport) => {
      const response = await ReportsService.postApiReportsCrop({
        formData: data
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_REPORT_CROP_LIST()] });
    }
  });
}
