import { useMutation } from "@tanstack/react-query";
import { postUserAuthLogin } from "@axios/api/Authentication";

const useLoginUserKey = "user_login";

interface ResponseBody {
  username: string;
  password: string;
}

export default function useLoginUserMutation() {
  return useMutation([useLoginUserKey], {
    async mutationFn(data: ResponseBody) {
      const response = await postUserAuthLogin(data);

      return response;
    }
  });
}
