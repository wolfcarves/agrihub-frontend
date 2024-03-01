import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserService } from "@api/openapi";
import { GET_USER_ADMIN_LIST } from "../get/useGetUserAdminListQuery";

const usePutUserAdminEnableKey = () => "DELETE_USER_ADMIN_ENABLE_KEY";

export default function usePutUserAdminEnable() {
  const queryClient = useQueryClient();

  return useMutation([usePutUserAdminEnableKey()], {
    async mutationFn(id: string) {
      const response = await UserService.postApiUserAdminEnable({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_USER_ADMIN_LIST()]);
    }
  });
}
