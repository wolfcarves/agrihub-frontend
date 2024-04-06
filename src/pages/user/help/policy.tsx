import { formatDate } from "@components/lib/utils";
import useGetCmsPrivacyPolicy from "@hooks/api/get/useGetCmsPrivacyPolicy";
import Loader from "@icons/Loader";
import parse from "html-react-parser";
import React from "react";

const Policy = () => {
  const { data: privacyData, isLoading: presentData } =
    useGetCmsPrivacyPolicy();
  return (
    <div className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-lg">
          <p>Last Updated: {formatDate(privacyData?.updatedat || "")}</p>
          <h3 className="mt-3 text-gray-800 text-3xl font-extrabold sm:text-4xl">
            Privacy Policy
          </h3>
          <div className="mt-3 text-gray-600 dark:text-gray-400">
            <p>
              Our Privacy Policy outlines how we collect, use, and protect your
              personal information. If you have any questions or concerns,
              please feel free to{" "}
              <a
                className="text-green-600 font-semibold whitespace-nowrap"
                href="mailto:center.urban.agriculture@qcu.edu.ph"
              >
                contact us
              </a>
              .
            </p>
          </div>
        </div>
        {presentData ? (
          <Loader />
        ) : (
          <div className="mt-12 divide-y sm:mt-20">
            {parse(privacyData?.content || "")}
          </div>
        )}
      </div>
    </div>
  );
};

export default Policy;
