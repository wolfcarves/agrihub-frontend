import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NewReportedUser, UserService } from "@api/openapi";
import { GET_USER_REPORT_LIST } from "../get/useGetUserReportList";

const useUserReportUsersMutationKey = () => "USER_REPORT_USERS_KEY";

type DataSchema = {
  formData: NewReportedUser;
};

export default function useUserReportUsersMutation() {
  const queryClient = useQueryClient();

  return useMutation([useUserReportUsersMutationKey()], {
    async mutationFn(data: DataSchema) {
      const response = await UserService.postApiUserReport(data);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_USER_REPORT_LIST()] });
    }
  });
}
