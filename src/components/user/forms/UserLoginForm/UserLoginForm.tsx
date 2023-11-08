import { Button, Input, Typography } from "@components-ui";
import { Form } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserLogin, UserLoginSchema } from "./schema";

import useLoginUserMutation from "@hooks/api/post/useUserLoginMutation";
import { UserLoginSchema as LoginRequestSchema } from "@api/openapi";

import {
  LeminCroppedCaptchaContainer,
  leminCroppedCaptcha
} from "@leminnow/react-lemin-cropped-captcha";
import { useState } from "react";

const containerId = import.meta.env.VITE_CAPTCHA_CONTAINER_ID;
const captchaId = import.meta.env.VITE_CAPTCHA_ID;
const catpchaPrivateKey = import.meta.env.VITE_CAPTCHA_PRIVATE_KEY;

const UserLoginForm = () => {
  const [captchaError, setCaptchaError] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserLogin>({
    mode: "onBlur",
    reValidateMode: "onSubmit",
    resolver: zodResolver(UserLoginSchema),
    defaultValues: {
      user: "emman123@gmail.com",
      password: "emman123"
    }
  });

  const { mutateAsync: userLogin, isLoading: isUserLoginLoading } =
    useLoginUserMutation();

  const { getCaptcha } = leminCroppedCaptcha;

  const onLoginSubmit = async (data: LoginRequestSchema) => {
    try {
      const isVerified =
        getCaptcha().getCaptchaValue().answer !== "" ? true : false;

      if (isVerified) {
        const { answer, challenge_id } = getCaptcha().getCaptchaValue();

        const raw = {
          user: data.user,
          password: data.password,
          privateKey: catpchaPrivateKey,
          challengeId: challenge_id,
          answer
        } as LoginRequestSchema & {
          privateKey: string;
          challengeId: string;
          answer: string;
        };

        await userLogin(data);
      } else {
        setCaptchaError(true);
      }
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

      <div className="my-7">
        <LeminCroppedCaptchaContainer
          containerId={containerId}
          captchaId={captchaId}
          onVerify={status => setCaptchaError(!status)}
        />
        <div className="py-2">
          {captchaError && (
            <Typography.H6
              $title="Enter Captcha"
              $size="base"
              $color="danger-1"
              $align="center"
            />
          )}
        </div>
      </div>

      <div>
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
