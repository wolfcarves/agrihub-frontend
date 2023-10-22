import { Button, Divider, Input } from "@packages/agrihub-ui";

import { useForm } from "react-hook-form";
import { UserLogin, UserLoginSchema } from "./schema";

import { zodResolver } from "@hookform/resolvers/zod";

import useLoginUserMutation from "@hooks/api/useUserLoginMutation";

export default function UserLoginForm() {
  const { register, handleSubmit } = useForm<UserLogin>({
    mode: "onBlur",
    resolver: zodResolver(UserLoginSchema),
    defaultValues: {
      username: "daniel1234",
      password: "qweR123$"
    }
  });

  const { mutateAsync: userLogin, error: userLoginError } =
    useLoginUserMutation();

  const onLoginSubmit = async (data: any) => {
    try {
      const res = await userLogin(data);
    } catch (e) {
      //
      console.log(e);
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

        <div className="mt-10">
          <Button label="Login" variant="primary" isLoading={true} />

          <div className="py-5">
            <Divider label={"or"} color="#00000011" />
          </div>

          <Button label="Sign up with Facebook" variant="secondary" />

          <Button
            label="Sign up with Google"
            className="mt-5"
            variant="secondary"
          />
        </div>
      </div>
    </form>
  );
}
