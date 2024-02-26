import { CmsService } from "@api/openapi";
import { useQuery } from "@tanstack/react-query";

export default function useCmsLandingDetailsQuery() {
  return useQuery({
    queryKey: ["CMD_LANDING_DETAILS_KEY"],
    queryFn: async () => {
      const response = await CmsService.getApiCmsLandingDetails();

      return response;
    }
  });
}
