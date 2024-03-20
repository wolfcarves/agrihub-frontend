import { Link } from "react-router-dom";
import AgrihubLogo from "@icons/AgrihubLogo";

const UserLoginFormTitle = () => {
  return (
    <>
      <Link
        to="/"
        className="flex w-max rounded-xl hover:scale-[1.10] duration-200"
      >
        <AgrihubLogo className="w-[2.5rem]" />
      </Link>

      <div className="flex flex-col gap-2 py-5 ">
        <h5 className="font-merri-black">Login to Agrihub</h5>
        <h6 className="text-foreground/70 font-inter-medium">
          Rooted in Agriculture: Growing Together, <br /> Harvesting Success
        </h6>
      </div>
    </>
  );
};

export default UserLoginFormTitle;
