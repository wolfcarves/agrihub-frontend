import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserService } from "@api/openapi";
import { GET_USER_ADMIN_LIST } from "../get/useGetUserAdminListQuery";

const useDeleteUserAdminDisableKey = () => "DELETE_USER_ADMIN_DISABLE_KEY";

export default function useDeleteUserAdminDisable() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteUserAdminDisableKey()], {
    async mutationFn(id: string) {
      const response = await UserService.deleteApiUserAdminDisable({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_USER_ADMIN_LIST()]);
    }
  });
}
