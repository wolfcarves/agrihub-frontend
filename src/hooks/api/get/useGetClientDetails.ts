import { CmsService } from "@api/openapi";
import { useQuery } from "@tanstack/react-query";

export default function useGetClientDetails() {
  return useQuery({
    queryKey: ["GET_CLIENT_DETAILS_KEY"],
    queryFn: async () => {
      const response = await CmsService.getApiCmsClientDetails();

      return response;
    }
  });
}
