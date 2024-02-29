import { useQuery } from "@tanstack/react-query";
import { AccessService } from "@api/openapi";

export const GET_ACCESS_VIEW = () => "GET_ACCESS_VIEW_KEYY";

export default function useGetAccessViewQuery(id: string) {
  return useQuery({
    queryKey: [GET_ACCESS_VIEW(), id],
    queryFn: async () => {
      const data = await AccessService.getApiAccessViewAccess({ id });
      return data;
    }
  });
}
