import { Divider, Input, Typography } from "@packages/agrihub-ui";

import { useForm, SubmitHandler } from "react-hook-form";
import { UserLogin, UserLoginSchema } from "./schema";

import { zodResolver } from "@hookform/resolvers/zod";

import useLoginUserMutation from "@hooks/api/useUserLoginMutation";

export default function UserLoginForm() {
  const { register, handleSubmit } = useForm<UserLogin>({
    mode: "onBlur",
    resolver: zodResolver(UserLoginSchema),
    defaultValues: {
      username: "daniel123x",
      password: "7qweR123$"
    }
  });

  const onSubmit = (data: UserLogin) => {
    console.log(data);
  };

  const { mutateAsync: userLogin } = useLoginUserMutation();

  const onLoginSubmit = async (data: any) => {
    try {
      const res = await userLogin(data);

      console.log(res);
    } catch (error) {
      //
    }
  };

  return (
    <form onSubmit={handleSubmit(onLoginSubmit)}>
      <div className="px-3">
        <div className="flex flex-col gap-3">
          <Input
            type="text"
            label="Username"
            {...register("username")}
            placeholder="Username"
          />
        </div>

        <div className="flex flex-col gap-3 mt-5">
          <Input
            type="password"
            label="Password"
            placeholder="Password"
            {...register("password")}
          />
        </div>

        <div>
          <button
            type="submit"
            className="mt-10 rounded-full border w-full py-2.5 px-4 bg-[#10D6B6]"
          >
            <Typography.Light label={"Submit"} size="base" />
          </button>

          <div className="py-5">
            <Divider label={"or"} color="#00000011" />
          </div>

          <button className="rounded-full border w-full py-2.5 px-4">
            <Typography.Light label={"Sign up with Facebook"} size="base" />
          </button>

          <button className="mt-5 rounded-full border w-full py-2.5 px-4">
            <Typography.Light label={"Sign up with Google"} size="base" />
          </button>
        </div>
      </div>
    </form>
  );
}
