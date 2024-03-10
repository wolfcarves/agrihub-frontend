import { useMutation } from "@tanstack/react-query";
import { UploaderService } from "@api/openapi";

export default function useDeleteFileUpload() {
  return useMutation(["CREATE_PROBLEM_MUTATION"], {
    async mutationFn(file: string) {
      const response = await UploaderService.deleteApiUpload({ file });
      return response;
    }
  });
}
