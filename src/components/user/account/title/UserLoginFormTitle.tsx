import { Link } from "react-router-dom";
import useGetCmsAboutDetails from "@hooks/api/get/useGetCmsAboutDetails";

const UserLoginFormTitle = () => {
  const S3_BASE_URL = import.meta.env.VITE_S3_BUCKET_BASEURL;
  const { data: aboutDetails } = useGetCmsAboutDetails();
  return (
    <>
      <Link
        to="/"
        className="flex w-max rounded-xl hover:scale-[1.10] duration-200"
      >
        <img
          className="h-12 rounded-full"
          src={S3_BASE_URL + aboutDetails?.agrihub_user_logo}
        />
      </Link>

      <div className="flex flex-col gap-2 py-5 ">
        <h5 className="font-poppins-semibold">Login to Agrihub</h5>
        <h6 className="text-foreground/70 font-inter-medium">
          Rooted in Agriculture: Growing Together, <br /> Harvesting Success
        </h6>
      </div>
    </>
  );
};

export default UserLoginFormTitle;
