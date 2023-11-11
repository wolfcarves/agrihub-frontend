import GoogleLogo from "@icons/google.svg";
import { Divider, Typography } from "@components-ui";
import { Link } from "react-router-dom";

const UserSignInMethods = () => {
  return (
    <>
      <div className="py-5">
        <div className="w-max">
          <Link to={"www.google.com"}>
            <img src={GoogleLogo} width={50} />
          </Link>
        </div>
      </div>
      <Divider $title="or" />
      <div className="py-5">
        <div>
          <Typography.Span $title={"Sign up with email"} $weight="semibold" />
        </div>
        <div>
          <Typography.Span $title={"Already have an account? "} />
          <Link to="/account/signup">
            <Typography.Span $title={"Sign up"} $color="primary-2" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserSignInMethods;
