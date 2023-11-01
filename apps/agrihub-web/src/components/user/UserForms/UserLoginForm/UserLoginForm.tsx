import { Button, Divider, Input } from "@packages/agrihub-ui";
import { Link, Form, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserLogin, UserLoginSchema } from "./schema";

import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import useLoginUserMutation from "@hooks/api/useUserLoginMutation";
import { UserLoginSchema as LoginRequestSchema } from "@api/openapi";
import withAuthGuard from "@higher-order/withAuthGuard";

const UserLoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserLogin>({
    mode: "onBlur",
    resolver: zodResolver(UserLoginSchema),
    defaultValues: {
      user: "emman@gmail.com",
      password: "emman123"
    }
  });

  const { mutateAsync: userLogin } = useLoginUserMutation();

  const onLoginSubmit = async (data: LoginRequestSchema) => {
    try {
      await userLogin(data);

      navigate("/account/signup"); //test
    } catch (e: any) {
      //
    }
  };

  return (
    <Form onSubmit={handleSubmit(onLoginSubmit)}>
      <div className="">
        <div className="flex flex-col gap-3">
          <Input
            type="text"
            label="Username"
            {...register("user")}
            errorMessage={errors.user?.message}
          />
        </div>

        <div className="flex flex-col gap-3 mt-5">
          <Input
            type="password"
            label="Password"
            {...register("password")}
            errorMessage={errors.password?.message}
          />
        </div>

        <div className="mt-10">
          <Button label="Continue" variant="primary" isLoading={true} />

          <div className="py-5">
            <Divider label={"or"} color="#00000011" />
          </div>

          <Button
            label={"Sign up with Google"}
            icon={<FcGoogle />}
            variant="outlined"
          />

          <Link to={"/account/signup"}>
            <Button
              label="Sign up with Email"
              variant="outlined"
              className="mt-5"
              icon={<MdEmail />}
            />
          </Link>
        </div>
      </div>
    </Form>
  );
};

export default UserLoginForm;
