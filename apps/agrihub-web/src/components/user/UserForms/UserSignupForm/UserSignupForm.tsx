import { Button, Input, Typography } from "@packages/agrihub-ui";
import { Link } from "react-router-dom";

export default function UserSignupForm() {
  return (
    <form>
      <div className="flex flex-col gap-3">
        <Input type="text" label="Email address" />
      </div>

      <div className="flex flex-col gap-3 mt-5">
        <Input type="password" label="Password" />
      </div>

      <div className="flex flex-col gap-3 mt-5">
        <Input type="password" label="ConfirmPassword" />
      </div>

      <div className="mt-10">
        <Link to={"/account/verify-email"}>
          <Button label="Continue" variant="primary" isLoading={true} />
        </Link>

        <div className="flex justify-center mt-10 gap-1">
          <Typography.H1
            label={"Already have an account?"}
            size="base"
            weight={200}
          />
          <Link to={"/account/login"}>
            <Typography.H1
              label={"Signup"}
              size="base"
              weight={500}
              className="text-black-100"
            />
          </Link>
        </div>
      </div>
    </form>
  );
}
