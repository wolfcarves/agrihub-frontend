import React from "react";

const Policy = () => {
  const policyList = [
    {
      priv: [
        {
          l: "Information Collected",
          d: "AgriHub collects user information during the registration process. This includes your username, full name, email address, and profile picture. The purpose of collecting this information is to facilitate collaboration and communication within the AgriHub platform."
        },
        {
          l: "Cookies and Tracking",
          d: "AgriHub utilizes cookies to maintain user authentication tokens in the backend. These tokens are crucial for user login and session management, providing a secure and personalized user experience within the platform. Cookies are used solely for this purpose and do not track or collect additional user data."
        },
        {
          l: "Data Security:",
          d: "To ensure the security of user data, AgriHub implements various measures [List of Security Measures]. In the event of a data breach, the platform follows a predefined Data Breach Procedure to handle the situation appropriately and protect user information."
        },
        {
          l: "Third-Party Sharing:",
          d: "AgriHub does not share user data with third parties. Your information remains confidential and is not disclosed to external entities without your consent."
        },
        {
          l: "User Rights",
          d: "Users have the right to modify their information, including whether to publicize certain details, through the profile page. Additionally, users retain intellectual property rights over the content they contribute to the platform's forums. AgriHub respects and upholds these rights."
        },
        {
          l: "Changes to the Privacy Policy",
          d: "Any changes to the Privacy Policy will be communicated through a prominent landing page notification. Users will be encouraged to review the updated policy to stay informed about how their data is collected, used, and protected within the AgriHub platform."
        }
      ]
    }
  ];

  return (
    <div className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-lg">
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

        <div className="mt-12 divide-y sm:mt-20">
          {policyList.map((list, idx) => (
            <div key={idx} className="py-5 gap-x-12 first:pt-0 sm:flex">
              <ul className="flex-1 space-y-6 sm:last:pb-6 sm:space-y-8">
                {list.priv.map((item, idx) => (
                  <p key={idx}>
                    <summary className="flex items-center justify-between font-semibold text-gray-700">
                      {item.l}
                    </summary>
                    <p
                      dangerouslySetInnerHTML={{ __html: item.d }}
                      className="mt-3 text-gray-600 leading-relaxed"
                    ></p>
                  </p>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Policy;
