import { Button, Input } from "@components-ui";
import { Form } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserLogin, UserLoginSchema } from "./schema";

import useLoginUserMutation from "@hooks/api/post/useUserLoginMutation";
import { UserLoginSchema as LoginRequestSchema } from "@api/openapi";

const UserLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserLogin>({
    mode: "onBlur",
    reValidateMode: "onSubmit",
    resolver: zodResolver(UserLoginSchema)
  });

  const { mutateAsync: userLogin, isLoading: isUserLoginLoading } =
    useLoginUserMutation();

  const onLoginSubmit = async (data: LoginRequestSchema) => {
    try {
      await userLogin(data);
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onLoginSubmit)}>
      <div className="flex flex-col gap-3">
        <Input
          type="text"
          $label="Username or Email address"
          {...register("user")}
          $errorMessage={errors.user?.message}
        />
      </div>

      <div className="flex flex-col gap-3 mt-5">
        <Input
          type="password"
          $label="Password"
          {...register("password")}
          $errorMessage={errors.password?.message}
        />
      </div>

      <div className="mt-10">
        <Button
          $title="Continue"
          $variant="primary"
          $size="lg"
          $fullWidth
          $withArrow
          $disabled={isUserLoginLoading}
          $isLoading={isUserLoginLoading}
        />
      </div>
    </Form>
  );
};

export default UserLoginForm;
