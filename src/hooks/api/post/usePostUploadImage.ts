import { useMutation } from "@tanstack/react-query";
import { UploaderService } from "@api/openapi";

export default function usePostUploadImage() {
  return useMutation(["CREATE_PROBLEM_MUTATION"], {
    async mutationFn(image?: Blob | undefined) {
      const response = await UploaderService.postApiUpload({
        formData: { image }
      });
      return response;
    }
  });
}
