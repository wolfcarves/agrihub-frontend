import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CmsService, NewUserFeedback } from "@api/openapi";
import { GET_CMS_USER_FEEDBACK_VIEW } from "../get/useGetCmsUserFeedbackView";

const useCmsUserFeedbackMutationKey = () => "PUT_CMS_USER_FEEDBACK_KEY";
type DataSchema = {
  requestBody: NewUserFeedback;
};
export default function useCmsUserFeedbackMutation() {
  const queryClient = useQueryClient();

  return useMutation([useCmsUserFeedbackMutationKey()], {
    async mutationFn(data: DataSchema) {
      const response = await CmsService.postApiCmsUserFeedback(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_CMS_USER_FEEDBACK_VIEW()]);
    }
  });
}
