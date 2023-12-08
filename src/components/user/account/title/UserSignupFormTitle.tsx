import { useNavigate } from "react-router-dom";

const UserSignupFormTitle = () => {
  const navigate = useNavigate();

  return (
    <>
      <span className="font-semibold">Step 1 of 2</span>
      <h2 className="font-semibold">Create an account</h2>
      <span>Already have an account? </span>
      <button onClick={() => navigate("/account/login")}>
        <span className="text-lime-500">Sign in</span>
      </button>
    </>
  );
};

export default UserSignupFormTitle;
