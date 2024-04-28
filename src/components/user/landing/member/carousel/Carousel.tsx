import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "@components/ui/button";
import useCmsLandingDetailsQuery from "@hooks/api/get/useCmsLandingDetailsQuery";
import { Link } from "react-router-dom";
import RegisterFarm from "@pages/user/community/buttons/RegisterFarm";
import LoadingSpinner from "@icons/LoadingSpinner";
import useAuth from "@hooks/useAuth";
import useGetFarmCheckExistingApplication from "@hooks/api/get/useGetFarmCheckExistingApplication";

const Carousels: React.FC = () => {
  const { data: UserData } = useAuth();
  const { isError } = useGetFarmCheckExistingApplication();
  const { data: cmsData } = useCmsLandingDetailsQuery();
  const { data: cmsDataLanding, isLoading: isImageLoading } =
    useCmsLandingDetailsQuery();
  const ctaImage = cmsDataLanding?.images?.[0]?.image;
  const { cta_description, cta_header } = cmsData || {};

  return (
    <>
      <div className="relative mx-auto w-full 2xl:h-90 h-[52rem]">
        <div className="absolute inset-0">
          {isImageLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <LoadingSpinner />
            </div>
          ) : !ctaImage ? (
            <>
              <div
                className="absolute inset-0 z-0 flex items-center text-white lg:hidden"
                style={{ background: "rgba(0, 0, 0, 0.6)" }}
              ></div>
              <img
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Error Image"
                className="w-full h-screen object-cover  object-top sm:block"
              />
            </>
          ) : (
            <img
              src={ctaImage}
              alt="Hero Image"
              className="w-full h-full object-cover sm:object-right-top object-landing sm:block max-w-screen-2xl mx-auto"
            />
          )}

          <div
            className="absolute inset-0 z-0 flex items-center text-white lg:hidden"
            style={{ background: "rgba(0, 0, 0, 0.6)" }}
          ></div>
          <div className="absolute inset-0 flex max-w-7xl mx-auto items-center mb-60 2xl:mb-40 text-white">
            <div className="px-4">
              <div style={{ fontFamily: "Arial Black" }} className="z-50">
                <div className="flex-1 max-w-lg py-5 sm:mx-auto lg:max-w-max lg:text-left">
                  <p className="text-green-400 lg:text-green-600 font-poppins-semibold">
                    Center for Urban Agriculture and Innovation
                  </p>
                  <h3 className="text-3xl text-slate-200 lg:text-gray-800 font-poppins-semibold md:text-4xl sm:max-w-md">
                    {cta_header}
                  </h3>
                  <p className="text-slate-200 lg:text-gray-800 font-poppins-medium leading-relaxed mt-3 max-w-[31rem]">
                    {cta_description}
                  </p>

                  <div className="flex gap-4 mt-10">
                    {UserData?.role !== "subfarm_head" &&
                      UserData?.role !== "farm_head" &&
                      UserData?.role !== "farmer" &&
                      UserData?.role !== "asst_admin" &&
                      UserData?.role !== "admin" && (
                        <div>
                          {!isError ? (
                            <Link to="/community/register">
                              <Button>Pending Applicaton</Button>
                            </Link>
                          ) : (
                            <RegisterFarm />
                          )}
                        </div>
                      )}
                    <Link to="/community">
                      <Button
                        className="font-poppins-medium"
                        variant="secondary"
                      >
                        Community <FaArrowRightLong className="ms-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousels;
