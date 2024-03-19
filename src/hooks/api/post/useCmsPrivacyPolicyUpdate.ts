import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CmsService, UpdatePrivacyPolicyRequest } from "@api/openapi";
import { GET_CMS_PRIVACY_POLICY_KEY } from "../get/useGetCmsPrivacyPolicy";

const useCmsPrivacyPolicyUpdateKey = () => "CMS_PRIVACY_POLICY_UPDATE_KEY";

type DataSchema = {
  requestBody: UpdatePrivacyPolicyRequest;
};

export default function useCmsPrivacyPolicyUpdate() {
  const queryClient = useQueryClient();

  return useMutation([useCmsPrivacyPolicyUpdateKey()], {
    async mutationFn(data: DataSchema) {
      const response = await CmsService.putApiPrivacyPolicyUpdate(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_CMS_PRIVACY_POLICY_KEY()]
      });
    }
  });
}
