import { useMutation } from "@tanstack/react-query";
import { AccountService } from "@api/openapi";

const useUserSendVerificationKey = () => "SEND_VERIFICATION";

export default function useUserSendVerification() {
  return useMutation([useUserSendVerificationKey()], {
    mutationFn: async () => {
      const response = AccountService.postApiAccountSendVerification();

      return response;
    }
  });
}
