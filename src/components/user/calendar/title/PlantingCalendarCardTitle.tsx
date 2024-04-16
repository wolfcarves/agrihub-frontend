import React from "react";
import QcuLogo from "@icons/qcu-logo.svg";

const S3_BASE_URL = import.meta.env.VITE_S3_BUCKET_BASEURL;

const PlantingCalendarCardTitle = ({ logo }: { logo?: string }) => {
  return (
    <>
      <div className="flex items-center space-x-5 mx-auto w-max pb-3">
        <img
          src={QcuLogo as unknown as string}
          width={53}
          height={53}
          className="mb-3"
        />

        <h3 className="text-center font-poppins-bold italic text-wrap whitespace-pre-line">
          Center for Urban Agriculture <br className="md:block hidden" /> and
          Innovation
        </h3>

        <img
          src={`${S3_BASE_URL}${logo}`}
          width={40}
          height={40}
          className="mb-3"
        />
      </div>
    </>
  );
};

export default PlantingCalendarCardTitle;
