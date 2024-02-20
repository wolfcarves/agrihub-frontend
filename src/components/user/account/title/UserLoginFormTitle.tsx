import { Link } from "react-router-dom";
import AgrihubLogo from "@icons/AgrihubLogo";

const UserLoginFormTitle = () => {
  return (
    <>
      <Link
        to="/"
        className="border w-max rounded-xl p-1 hover:scale-[1.10] hover:shadow-sm duration-200"
      >
        <AgrihubLogo className="w-[2rem]" />
      </Link>

      <div className="flex flex-col gap-2 py-5 ">
        <h5 className="font-poppins-semibold">Login to Agrihub</h5>
        <h6 className="text-foreground/70">
          Rooted in Agriculture: Growing Together, <br /> Harvesting Success
        </h6>
      </div>
    </>
  );
};

export default UserLoginFormTitle;
