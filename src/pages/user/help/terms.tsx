import React from "react";

const Terms = () => {
  const termsList = [
    {
      label: "Purpose of AgriHub",
      tnc: [
        {
          t: "AgriHub is a platform designed to facilitate collaboration and knowledge-sharing among urban farmers through a public forum. The website also includes news, events, seminars, and learning materials provided by the owner.",
          c: ""
        }
      ]
    },
    {
      label: "User Registration",
      tnc: [
        {
          t: "Users are required to create accounts to participate in the forum and access additional features.",
          c: ""
        },
        {
          t: "Information collected during registration includes username, name, email address, and profile picture.",
          c: ""
        },
        {
          t: "Users authenticate their accounts through email verification",
          c: ""
        }
      ]
    },
    {
      label: "Content and Usage",
      tnc: [
        {
          t: "Users can post questions, answers, and images on the public forum.",
          c: ""
        },
        {
          t: "User-generated content must adhere to community guidelines.",
          c: ""
        },
        {
          t: "The owner has an admin page to monitor registered urban farms' progress and access data analytics.The owner has an admin page to monitor registered urban farms' progress and access data analytics.",
          c: ""
        }
      ]
    },
    {
      label: "Intellectual Property",
      tnc: [
        {
          t: "Users retain ownership of their content; unauthorized use by external parties may be subject to intellectual property rights.",
          c: ""
        },
        {
          t: "Copyright and Trademarks:",
          c: "The Philippines adheres to international standards for protecting IP rights online, addressing issues like digital piracy and domain name disputes."
        },
        {
          t: "IP Code of the Philippines:",
          c: "This legal framework provides guidelines for IP rights enforcement in the digital age."
        }
      ]
    },
    {
      label: "User Conduct",
      tnc: [
        {
          t: "Prohibited behaviors include harassment, spamming, posting offensive content and spreading false and malicious information.",
          c: ""
        },
        {
          t: "Violations may result in account termination.",
          c: ""
        }
      ]
    },
    {
      label: "Termination",
      tnc: [
        {
          t: "Accounts may be terminated for violations of user conduct.",
          c: ""
        },
        {
          t: "User data handling upon termination involves permanent deletion unless required for legal reasons.",
          c: ""
        }
      ]
    },
    {
      label: "Disclaimers and Limitation of Liability",
      tnc: [
        {
          t: "AgriHub disclaims responsibility for the accuracy of user-generated content",
          c: ""
        },
        {
          t: "Liability is limited to the extent permitted by applicable law.",
          c: ""
        }
      ]
    },
    {
      label: "Disclaimers and Limitation of Liability",
      tnc: [
        {
          t: "These terms are governed by and construed in accordance with the Republic Act No. 10175, or also known as the Cybercrime Prevention Act of 2012, and any applicable laws of the Philippines. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Quezon City, Regional Trial Court (RTC) Branch 100.",
          c: ""
        }
      ]
    }
  ];
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-lg">
          <p>Last Updated: March 7, 2024</p>
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
          {termsList.map((list, idx) => (
            <div key={idx} className="py-5 gap-x-12 first:pt-0 sm:flex">
              <div className="max-w-sm pt-8 pb-6 sm:pt-0 lg:flex-grow">
                <h4 className="text-gray-500 font-semibold">{list.label}</h4>
              </div>
              <ul className="flex-1 space-y-6 sm:last:pb-6 sm:space-y-8">
                {list.tnc.map((item, idx) => (
                  <p key={idx}>
                    <summary className="flex items-center justify-between font-semibold text-gray-700">
                      {item.t}
                    </summary>
                    <p
                      dangerouslySetInnerHTML={{ __html: item.c }}
                      className="mt-3 text-gray-600 leading-relaxed"
                    ></p>
                  </p>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Terms;
