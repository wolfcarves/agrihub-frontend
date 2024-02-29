import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AccessService, NewAdminRequestBody } from "@api/openapi";
import { GET_USER_ADMIN_LIST } from "../get/useGetUserAdminListQuery";

const useAccessCreateAdminKey = () => "ACCESS_CREATE_ADMIN_KEY";

type DataSchema = {
  requestBody: NewAdminRequestBody;
};

export default function useAccessCreateAdmin() {
  const queryClient = useQueryClient();

  return useMutation([useAccessCreateAdminKey()], {
    async mutationFn(data: DataSchema) {
      const response = await AccessService.postApiAccessCreateAdmin(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_USER_ADMIN_LIST()] });
    }
  });
}
