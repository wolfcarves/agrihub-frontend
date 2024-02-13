import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";
export const GET_REPORT_LEARNING_MATERIALS = () =>
  "GET_REPORT_LEARNING_MATERIALS_KEY";

export default function useGetReportLearningMaterials() {
  return useQuery({
    queryKey: [GET_REPORT_LEARNING_MATERIALS()],
    queryFn: async () => {
      const data = await ReportsService.getApiReportsLearningMaterials();
      return data;
    },
    keepPreviousData: true
  });
}
