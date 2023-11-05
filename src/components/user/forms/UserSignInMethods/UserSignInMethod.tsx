import GoogleLogo from "@icons/google.svg";
import { Divider, Typography } from "@components-ui";
import { Link } from "react-router-dom";

const UserSignInMethods = () => {
  return (
    <>
      <div className="py-5">
        <img src={GoogleLogo} width={50} />
      </div>
      <Divider $title="or" />
      <div className="py-5">
        <div>
          <Typography.Span $title={"Sign up with email"} $weight="600" />
        </div>
        <div>
          <Typography.Span $title={"Already have an account? "} />
          <Link to="/account/signup">
            <Typography.Span $title={"Sign up"} $color="primary-1" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserSignInMethods;
