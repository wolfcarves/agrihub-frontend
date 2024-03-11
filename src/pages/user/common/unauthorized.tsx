import { Button } from "@components/ui/button";
import UnauthorizeIllustration from "@icons/UnauthorizeIllustration";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
          <p className="text-sm font-medium text-green-500 dark:text-green-400">
            401 Unauthorize
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Unauthorize Access
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            You do not have permission to view this resource. Please ensure you
            are logged in with the correct credentials and try again.
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <Button variant="outline" onClick={handleBack}>
              <IoArrowBackOutline />
              <span>Go back</span>
            </Button>
            <Button onClick={() => navigate("/")}>Take me home</Button>
          </div>
        </div>
        <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
          <div className="w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover">
            <UnauthorizeIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unauthorized;
