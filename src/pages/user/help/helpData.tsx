import {
  BsFilePerson,
  BsBook,
  BsUnlock,
  BsNewspaper,
  BsQuestion,
  BsShield
} from "react-icons/bs";

export const helpList = [
  {
    ref: "account-settings",
    title: "Account Settings",
    desc: "Manage your user profile, update personal information, and customize your account settings.",
    icon: <BsFilePerson style={{ height: "2.5rem", width: "2.5rem" }} />,
    child: [
      {
        title: "",
        ref: "",

        help: [
          {
            q: "",
            a: ""
          }
        ]
      }
    ],
    help: [
      {
        q: "1. How do I change my profile picture?",
        a: "To update your profile picture, navigate to the Account Settings page and find the 'Change Profile Picture' option. Upload a new image and save your changes."
      },
      {
        q: "2. Can I change my email address associated with the account?",
        a: "Yes, you can change your email address in the Account Settings. Look for the 'Change Email' option, enter the new email, and confirm the change."
      },
      {
        q: "3. What information is visible to other users in my profile?",
        a: "By default, only basic information is visible to other users. You can customize your privacy settings on the Account Settings page to control what information is shared."
      },
      {
        q: "4. How can I reset my account password?",
        a: "If you forget your password, click on the 'Forgot Password' link on the login page. Follow the instructions sent to your email to reset your password."
      },
      {
        q: "5. Is it possible to deactivate or delete my account?",
        a: "Yes, you can deactivate or delete your account in the Account Settings. Look for the 'Deactivate Account' or 'Delete Account' option, follow the prompts, and confirm your decision."
      },
      {
        q: "6. How do I enable two-factor authentication for added security?",
        a: "To enable two-factor authentication, go to the Account Settings page, find the 'Security Settings' section, and follow the instructions to set up two-factor authentication for your account."
      }
    ]
  },

  {
    ref: "articlesq",
    title: "Articles",
    desc: "Explore a variety of articles covering topics from our products and services to industry trends.",
    icon: <BsBook style={{ height: "2.5rem", width: "2.5rem" }} />,
    help: [
      {
        q: "How do I find relevant articles?",
        a: "You can find relevant articles by navigating to the Articles page and using the search bar or browsing through different categories. Feel free to explore and discover valuable insights."
      }
    ]
  },
  {
    ref: "authq",
    title: "Login and Password",
    desc: "Get help with login issues, password recovery, and account security measures.",
    icon: <BsUnlock style={{ height: "2.5rem", width: "2.5rem" }} />,
    child: [
      {
        title: "",
        ref: "",

        help: [
          {
            q: "",
            a: ""
          }
        ]
      }
    ],
    help: [
      {
        q: "Forgot my password, what should I do?",
        a: "If you've forgotten your password, you can click on the 'Forgot Password' link on the login page. Follow the instructions to reset your password and regain access to your account."
      }
    ]
  },
  {
    ref: "blogsq",
    title: "Blogs",
    desc: "Stay informed and entertained with our latest blog posts, featuring insights, updates, and stories about our products, industry trends, and more.",
    icon: <BsNewspaper style={{ height: "2.5rem", width: "2.5rem" }} />,
    child: [
      {
        title: "",
        ref: "",

        help: [
          {
            q: "",
            a: ""
          }
        ]
      }
    ],
    help: [
      {
        q: "How often are new blog posts published?",
        a: "We regularly publish new blog posts to keep you updated on the latest news, insights, and trends. Check back frequently to stay informed and entertained."
      }
    ]
  },
  {
    ref: "questionsq",
    title: "Questions",
    desc: "Find quick and comprehensive answers to common questions about our products, services, and policies.",
    icon: <BsQuestion style={{ height: "2.5rem", width: "2.5rem" }} />,
    child: [
      {
        title: "test",
        ref: "test",

        help: [
          {
            q: "test",
            a: "test"
          }
        ]
      }
    ],
    help: [
      {
        q: "How can I contact support for further assistance?",
        a: "If you can't find the answer to your question, feel free to reach out to our support team. Visit the Contact Us page for details on how to get in touch with us."
      }
    ]
  },
  {
    ref: "privacy-security",
    title: "Privacy and Security",
    desc: "Learn about our commitment to privacy, data security practices, and how we protect your information.",
    icon: <BsShield style={{ height: "2.5rem", width: "2.5rem" }} />,
    child: [
      {
        title: "",
        ref: "",

        help: [
          {
            q: "",
            a: ""
          }
        ]
      }
    ],
    help: [
      {
        q: "How is my personal information secured?",
        a: "We take your privacy seriously. Learn more about our security measures and how we safeguard your personal information on our Privacy and Security page."
      }
    ]
  }
];
