import useGetCmsTermsConditions from "@hooks/api/get/useGetCmsTermsConditions";
import Loader from "@icons/Loader";
import React from "react";
import parse from "html-react-parser";
import { formatDate } from "@components/lib/utils";

const Terms = () => {
  const { data: termsData, isLoading } = useGetCmsTermsConditions();

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-lg">
          <p>Last Updated: {formatDate(termsData?.updatedat || "")}</p>
          <h3 className="mt-3 text-gray-800 text-3xl font-extrabold sm:text-4xl">
            Terms of use
          </h3>
          <div className="mt-3 text-gray-600 dark:text-gray-400">
            <p>
              Welcome to AgriHub! By using our platform, you agree to comply
              with and be bound by the following terms and conditions. If you
              have any questions or concerns, please feel free to{" "}
              <a
                className="text-green-600 font-semibold whitespace-nowrap"
                href="center.urban.agriculture@qcu.edu.ph"
              >
                contact us
              </a>
              .
            </p>
          </div>
        </div>
        <div className="mt-12 divide-y sm:mt-20">
          {isLoading ? (
            <Loader />
          ) : (
            <div className="mt-12 divide-y sm:mt-20">
              {parse(termsData?.content || "")}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Terms;
