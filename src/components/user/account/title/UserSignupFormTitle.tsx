import AgrihubLogo from "@icons/AgrihubLogo";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserSignupFormTitle = () => {
  const navigate = useNavigate();

  return (
    <>
      <Link
        to="/"
        className="flex w-max rounded-xl hover:scale-[1.10] duration-200"
      >
        <AgrihubLogo className="w-[2.5rem]" />
      </Link>

      <div className="flex flex-col gap-2 py-5 ">
        <h5 className="font-poppins-semibold text-foreground/90">
          Create an account
        </h5>

        <div className="flex gap-1">
          <h6 className="text-[#808188]">Have an account already? </h6>

          <span
            className="hover:opacity-90 text-primary/80 cursor-pointer"
            onClick={e => {
              e.preventDefault();
              navigate("/account/login");
            }}
          >
            Login
          </span>
        </div>
      </div>
    </>
  );
};

export default UserSignupFormTitle;
