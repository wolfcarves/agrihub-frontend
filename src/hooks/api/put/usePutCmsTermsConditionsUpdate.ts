import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CmsService, UpdateTermsConditionsRequest } from "@api/openapi";
import { GET_CMS_TERMS_CONDITIONS_KEY } from "../get/useGetCmsTermsConditions";

const usePutCmsTermsConditionsUpdateKey = () =>
  "CMS_TERMS_CONDITIONS_UPDATE_KEY";

type DataSchema = {
  requestBody: UpdateTermsConditionsRequest;
};

export default function usePutCmsTermsConditionsUpdate() {
  const queryClient = useQueryClient();

  return useMutation([usePutCmsTermsConditionsUpdateKey()], {
    async mutationFn(data: DataSchema) {
      const response = await CmsService.putApiTermsConditionsUpdate(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_CMS_TERMS_CONDITIONS_KEY()]
      });
    }
  });
}
