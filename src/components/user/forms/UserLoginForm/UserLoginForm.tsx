import { Button, Input, Typography } from "@components-ui";
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
    resolver: zodResolver(UserLoginSchema),
    mode: "onBlur",
    reValidateMode: "onChange"
  });

  const {
    mutateAsync: userLogin,
    isLoading: isUserLoginLoading,
    error: userLoginError
  } = useLoginUserMutation();

  const onLoginSubmit = async (data: LoginRequestSchema) => {
    try {
      await userLogin(data);
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onLoginSubmit)}>
      <div className="my-1">
        {userLoginError && (
          <Typography.Span
            $title={userLoginError.body.message}
            $color="danger-1"
          />
        )}
      </div>

      <Input
        type="text"
        $label="Username or Email address"
        {...register("user")}
        $errorMessage={errors.user?.message}
      />

      <Input
        type="password"
        $label="Password"
        {...register("password")}
        $errorMessage={errors.password?.message}
      />

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
