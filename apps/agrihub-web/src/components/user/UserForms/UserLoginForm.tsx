import { Button, Divider, Input, Typography } from "@packages/agrihub-ui";

import { useForm } from "react-hook-form";
import { UserLogin, UserLoginSchema } from "./schema";

import { zodResolver } from "@hookform/resolvers/zod";

import useLoginUserMutation from "@hooks/api/useUserLoginMutation";

export default function UserLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserLogin>({
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
      console.log("userLoginError", userLoginError);
    }

  };

  return (
    <form onSubmit={handleSubmit(onLoginSubmit)}>
      <div className="">
        <div className="flex flex-col gap-3">
          {errors.username && (
            <Typography.H1
              label={errors.username.message}
              className="text-red-100"
              size="base"
              weight={500}
            />
          )}

          <Input
            type="text"
            label="Your email address"
            {...register("username")}
          />
        </div>

        <div className="flex flex-col gap-3 mt-5">
          <Input type="password" label="Password" {...register("password")} />
        </div>

        <div className="mt-10">
          <Button label="Login" variant="primary" isLoading={true} />

          <div className="py-5">
            <Divider label={"or"} color="#00000011" />
          </div>

          <Button label="Sign up with Facebook" variant="outlined" />

          <Button
            label="Sign up with Google"
            className="mt-5"
            variant="outlined"
          />
        </div>
      </div>
    </form>
  );
}
