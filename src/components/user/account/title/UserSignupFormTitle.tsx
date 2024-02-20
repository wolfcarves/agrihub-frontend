import AgrihubLogo from "@icons/AgrihubLogo";
import { Link } from "react-router-dom";

const UserSignupFormTitle = () => {
  return (
    <>
      <Link
        to="/"
        className="border w-max rounded-xl p-1 hover:scale-[1.10] hover:shadow-sm duration-200"
      >
        <AgrihubLogo className="w-[2rem]" />
      </Link>

      <div className="flex flex-col gap-2 py-5 ">
        <h5 className="font-poppins-semibold text-foreground/90">
          Create an account
        </h5>
        <h6 className="text-[#808188]">
          Have an account already?{" "}
          <Link to="/account/login" className="text-foreground">
            Login here
          </Link>
        </h6>
      </div>
    </>
  );
};

export default UserSignupFormTitle;
