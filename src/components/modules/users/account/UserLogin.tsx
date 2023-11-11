import LoginForm from "@components/user/forms/UserLoginForm/UserLoginForm";
import UserSignInMethods from "@components/user/forms/UserSignInMethods/UserSignInMethod";
import UserLoginFormTitle from "@components/user/title/UserLoginFormTitle";

const UserLogin = () => {
  return (
    <>
      <UserLoginFormTitle />
      <LoginForm />
      <UserSignInMethods />
    </>
  );
};

export default UserLogin;
