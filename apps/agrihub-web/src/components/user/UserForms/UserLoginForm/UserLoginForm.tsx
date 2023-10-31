import { Button, Divider, Input } from "@packages/agrihub-ui";
import { Link, useNavigate, Form } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserLogin, UserLoginSchema } from "./schema";

import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import useLoginUserMutation from "@hooks/api/useUserLoginMutation";

export default function UserLoginForm() {
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

  const onLoginSubmit = async (data: any) => {
    try {
      const res = await userLogin(data);

      navigate("/account/signup");
    } catch (e: any) {
      console.log(e);
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
}
