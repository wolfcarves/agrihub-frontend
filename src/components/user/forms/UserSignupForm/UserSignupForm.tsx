import { Button, Input, Typography } from "@components-ui";
import { Link, Form } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserSignUp, userSignupSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useUserSignupMutation from "@hooks/api/post/useUserSignupMutation";

const UserSignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserSignUp>({
    mode: "onChange",
    reValidateMode: "onSubmit",
    resolver: zodResolver(userSignupSchema)
  });

  const { mutateAsync: signUpUser, isLoading: isSignUpUserLoading } =
    useUserSignupMutation();

  const onSignupSubmit = async (data: any) => {
    try {
      await signUpUser(data);
    } catch (error: any) {
      console.error(error.body.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSignupSubmit)}>
      <div className="flex flex-col gap-3">
        <Input
          type="email"
          $label="Email address"
          {...register("email")}
          $errorMessage={errors?.email?.message}
        />
      </div>

      <div className="flex flex-col gap-3 mt-5">
        <Input
          type="password"
          $label="Password"
          {...register("password")}
          $errorMessage={errors?.password?.message}
        />
      </div>

      <div className="flex flex-col gap-3 mt-5">
        <Input
          type="password"
          $label="Confirm Password"
          {...register("confirmPassword")}
          $errorMessage={errors?.confirmPassword?.message}
        />
      </div>

      <div className="mt-10">
        <Button
          $title="Continue"
          $variant="primary"
          $size="lg"
          $fullWidth
          $isLoading={isSignUpUserLoading}
          type="submit"
        />

        <div className="flex justify-center mt-10 gap-1">
          <Typography.H6 $title={"Already have an account?"} />
          <Link to={"/account/login"}>
            <Typography.H6 $title={"Sign in"} $color="primary-1" />
          </Link>
        </div>
      </div>
    </Form>
  );
};

export default UserSignupForm;
