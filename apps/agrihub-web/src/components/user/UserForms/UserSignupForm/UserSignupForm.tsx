import withAuthGuard from "@higher-order/withAuthGuard";
import { Button, Input, Typography } from "@packages/agrihub-ui";
import { Link } from "react-router-dom";

const UserSignupForm = () => {
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
          <Button label="Continue" variant="primary" />
        </Link>

        <div className="flex justify-center mt-10 gap-1">
          <Typography.H6 $label={"Already have an account?"} />
          <Link to={"/account/login"}>
            <Typography.H6 $label={"Signup"} />
          </Link>
        </div>
      </div>
    </form>
  );
};

export default UserSignupForm;
