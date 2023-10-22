import { useMutation } from "@tanstack/react-query";

import { UserService } from "@api/openapi";
import { UserAuthSchema } from "@api/openapi";

const useLoginUserKey = "user_login";

export default function useLoginUserMutation() {
  return useMutation([useLoginUserKey], {
    async mutationFn(data: UserAuthSchema) {
      const response = await UserService.postV1ApiAuthLogin(data);
      return response;
    }
  });
}
