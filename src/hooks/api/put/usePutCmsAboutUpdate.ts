import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CmsService, UpdateAboutUsRequest } from "@api/openapi";
import { GET_CMS_ABOUT_KEY } from "../get/useGetCmsAboutDetails";

const usePutCmsAboutUpdateKey = () => "PUT_CMS_ABOUT_UPDATE_KEY";
type DataSchema = {
  formData: UpdateAboutUsRequest;
};
export default function usePutCmsAboutUpdate() {
  const queryClient = useQueryClient();

  return useMutation([usePutCmsAboutUpdateKey()], {
    async mutationFn(data: DataSchema) {
      const response = await CmsService.putApiCmsAboutUpdate(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_CMS_ABOUT_KEY()]);
    }
  });
}
