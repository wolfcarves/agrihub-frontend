import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmService } from "@api/openapi";
import { GET_CROP_ARCHIVE_LIST_ADMIN } from "../get/useGetFarmCropsArchiveListAdmin";

const useDeleteFarmCropArchiveAdminKey = () => "DELETE_CROP_ADMIN_ARCHIVE_KEY";

export default function useDeleteFarmCropArchiveAdmin() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteFarmCropArchiveAdminKey()], {
    async mutationFn(id: string) {
      const response = await FarmService.deleteApiFarmCropArchive({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_CROP_ARCHIVE_LIST_ADMIN()]);
    }
  });
}
