import UserLoginForm from "@components/user/account/forms/UserLoginForm/UserLoginForm";
import UserLoginFormTitle from "@components/user/account/title/UserLoginFormTitle";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { Helmet } from "react-helmet-async";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login to Agrihub</title>
      </Helmet>
      <div className="mb-10 w-max">
        <Link to="/">
          <span className="flex items-center gap-x-2 text-foreground font-poppins-semibold hover:underline hover:underline-offset-2 py-2.5 px-1.5 rounded-lg duration-200">
            <FaArrowLeftLong /> Back
          </span>
        </Link>
      </div>
      <UserLoginFormTitle />
      <UserLoginForm />
    </>
  );
};

export default withAuthGuard(Login, ["guest"]);
