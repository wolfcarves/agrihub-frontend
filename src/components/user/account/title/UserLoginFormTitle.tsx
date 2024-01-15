import { useNavigate } from "react-router-dom";

const UserLoginFormTitle = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="font-semibold">Sign in</h2>
      <span>New user? </span>
      <span
        onClick={() => {
          navigate("/account/signup");
        }}
        className="text-lime-500 cursor-pointer hover:opacity-80"
      >
        Create an account
      </span>
    </>
  );
};

export default UserLoginFormTitle;
