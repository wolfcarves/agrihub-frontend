import UserLogin from "@components/modules/users/account/UserLogin";
import { Helmet } from "react-helmet-async";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login to Agrihub</title>
      </Helmet>
      <UserLogin />
    </>
  );
};

export default Login;
