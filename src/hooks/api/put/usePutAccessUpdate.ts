import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AccessService, UpdateAccessControl } from "@api/openapi";
import { GET_USER_ADMIN_LIST } from "../get/useGetUserAdminListQuery";

const usePutAccessUpdateKey = () => "PUT_ACCESS_UPDATE_KEY";

type DataSchema = {
  id: string;
  requestBody: UpdateAccessControl;
};

export default function usePutAccessUpdate() {
  const queryClient = useQueryClient();

  return useMutation([usePutAccessUpdateKey()], {
    async mutationFn(data: DataSchema) {
      const response = await AccessService.putApiAccessUpdateAccess(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_USER_ADMIN_LIST()] });
    }
  });
}
