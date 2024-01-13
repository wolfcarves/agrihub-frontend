import { Link } from "react-router-dom";

const UserLoginFormTitle = () => {
  return (
    <>
      <h2 className="font-semibold">Sign in</h2>
      <span>New user? </span>
      <Link to={"/account/signup"}>
        <span className="text-lime-500">Create an account</span>
      </Link>
    </>
  );
};

export default UserLoginFormTitle;
