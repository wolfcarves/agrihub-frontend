import AgrihubLogo from "@icons/AgrihubLogo";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserSignupFormTitle = () => {
  const navigate = useNavigate();

  return (
    <>
      <Link
        to="/"
        className="flex border w-max rounded-xl p-1 hover:scale-[1.10] hover:shadow-sm duration-200"
      >
        <AgrihubLogo className="w-[2rem]" />
      </Link>

      <div className="flex flex-col gap-2 py-5 ">
        <h5 className="font-merri-black text-foreground/90">
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
