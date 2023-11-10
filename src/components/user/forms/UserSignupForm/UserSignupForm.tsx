import { Button, Input, Typography } from "@components-ui";
import { Link, Form } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserSignUp, userSignupSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useUserSignupMutation from "@hooks/api/post/useUserSignupMutation";
import {
  LeminCroppedCaptchaContainer,
  leminCroppedCaptcha
} from "@leminnow/react-lemin-cropped-captcha";
import { useState } from "react";
import { UserRegisterSchema } from "@api/openapi";

const containerId = import.meta.env.VITE_CAPTCHA_CONTAINER_ID;
const captchaId = import.meta.env.VITE_CAPTCHA_ID;
const catpchaPrivateKey = import.meta.env.VITE_CAPTCHA_PRIVATE_KEY;

const UserSignupForm = () => {
  const { getCaptcha } = leminCroppedCaptcha;
  const [captchaError, setCaptchaError] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserSignUp>({
    resolver: zodResolver(userSignupSchema),
    mode: "onChange",
    reValidateMode: "onChange"
  });

  const { mutateAsync: signUpUser, isLoading: isSignUpUserLoading } =
    useUserSignupMutation();

  const onSignupSubmit = async (data: any) => {
    try {
      const isVerified =
        getCaptcha().getCaptchaValue().answer !== "" ? true : false;

      if (isVerified) {
        const { answer, challenge_id } = getCaptcha().getCaptchaValue();

        const raw = {
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
          privateKey: catpchaPrivateKey,
          challengeId: challenge_id,
          answer
        } as UserRegisterSchema & {
          privateKey: string;
          challengeId: string;
          answer: string;
        };

        await signUpUser(data);
      } else {
        setCaptchaError(true);
      }
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSignupSubmit)}>
      <Input
        type="email"
        $label="Email address"
        {...register("email")}
        $errorMessage={errors?.email?.message}
      />

      <Input
        type="password"
        $label="Password"
        {...register("password")}
        $errorMessage={errors?.password?.message}
      />

      <Input
        type="password"
        $label="Confirm Password"
        {...register("confirmPassword")}
        $errorMessage={errors?.confirmPassword?.message}
      />

      <div className="my-7">
        <LeminCroppedCaptchaContainer
          containerId={containerId}
          captchaId={captchaId}
          onVerify={(status: boolean) => setCaptchaError(!status)}
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
          $isLoading={isSignUpUserLoading}
          $disabled={isSignUpUserLoading}
          type="submit"
        />

        <div className="mt-10 text-center">
          <Typography.Span $title={"Already have an account?"} />
          <Link to={"/account/login"} className="ms-1">
            <Typography.Span $title={"Sign in"} $color="primary-2" />
          </Link>
        </div>
      </div>
    </Form>
  );
};

export default UserSignupForm;
