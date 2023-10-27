import { useEffect, useState } from "react";
import { Button, Divider, Input, Typography } from "@packages/agrihub-ui";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserLogin, UserLoginSchema } from "./schema";

import useLoginUserMutation from "@hooks/api/useUserLoginMutation";

import { getUserState, setUser } from "@redux/slices/userSlice";
import { useSelector, useDispatch } from "@redux/store";

import { Link, useNavigate } from "react-router-dom";

export default function UserLoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState("");

  const {
    user: { isAuthenticated }
  } = useSelector(getUserState);

  console.log(isAuthenticated);

  // useEffect(() => {
  //   if(isAuthenticated) {
  //     navigate("/feed/questions/");
  //   }
  // }, [isAuthenticated, navigate]);

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

  const { mutateAsync: userLogin } = useLoginUserMutation();

  const onLoginSubmit = async (data: any) => {
    try {
      const { user } = await userLogin(data);

      dispatch(
        setUser({
          isAuthenticated: true,
          userId: user?.id,
          email: user?.email,
          username: "XXX"
        })
      );
    } catch (e: any) {
      setErrorMessage(e.body.message);
      console.log(e);
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

          <Input type="text" label="Username" {...register("username")} />
        </div>

        <div className="flex flex-col gap-3 mt-5">
          <Input type="password" label="Password" {...register("password")} />
        </div>

        <div className="mt-10">
          <Button label="Login" variant="primary" isLoading={true} />

          <div className="py-5">
            <Divider label={"or"} color="#00000011" />
          </div>

          <Button label="Sign up with Google" variant="outlined" />

          <Link to={"/account/signup"}>
            <Button
              label="Sign up with Email"
              variant="outlined"
              className="mt-5"
            />
          </Link>
        </div>
      </div>
    </form>
  );
}
