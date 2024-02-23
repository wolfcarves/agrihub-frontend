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
    answer:
      "Manage your user profile, update personal information, and customize your account settings.",
    icon: <BsFilePerson style={{ height: "2.5rem", width: "2.5rem" }} />,
    help: [
      {
        q: "How can I create my account",
        a: "1. First, go to: https://agrihub.vercel.app/account/signup.2. Then, type your working email address and make sure you can access it later for verification. Example: juandelacruz@gmail.com 3. Next, make sure you keep your password a secret, keep a record on paper, and don’t lose it. It should have at least one uppercase, one lowercase, and one number. The minimum number of characters is eight. Example: Muning01 4. Then type again your password in “Confirm Password”5. Click the checkbox and complete the puzzle.Press “confirm”. 6. Go to your email account; if you’re using Gmail, go to: https://mail.google.com If not, use otherwise."
      },
      {
        q: "How can I log in and log out",
        a: "To update your profile picture, navigate to the Account Settings page and find the 'Change Profile Picture' option. Upload a new image and save your changes."
      }
    ]
  },
  {
    ref: "privacy-settings",
    title: "Privacy Settings",
    answer:
      "Control the privacy of your account and choose who can view your profile and activities.",
    icon: <BsShield style={{ height: "2.5rem", width: "2.5rem" }} />,
    help: [
      {
        q: "How do I set my privacy preferences",
        a: "Navigate to the Privacy Settings section in your account settings. From there, you can customize who can see your profile, activities, and other relevant information."
      },
      {
        q: "Can I hide my online status",
        a: "Yes, you can hide your online status by adjusting your privacy settings. Simply toggle the option to hide your online status from other users."
      }
    ]
  },
  {
    ref: "help-center",
    title: "Help Center",
    answer:
      "Access articles, FAQs, and contact support for assistance with common issues and questions.",
    icon: <BsQuestion style={{ height: "2.5rem", width: "2.5rem" }} />,
    help: [
      {
        q: "How can I contact support",
        a: "You can contact our support team by navigating to the Help Center and selecting the 'Contact Support' option. Fill out the form with your inquiry, and our team will get back to you as soon as possible."
      },
      {
        q: "Are there any tutorials available",
        a: "Yes, we have a range of tutorials available in the Help Center to help you get started with our platform and make the most out of its features."
      }
    ]
  },
  {
    ref: "notifications",
    title: "Notifications",
    answer:
      "Stay informed about important updates, messages, and activities within the community.",
    icon: <BsNewspaper style={{ height: "2.5rem", width: "2.5rem" }} />,
    help: [
      {
        q: "How can I manage my notifications",
        a: "You can manage your notifications settings by navigating to the Notifications section in your account settings. From there, you can customize which types of notifications you want to receive and how you want to receive them."
      },
      {
        q: "Why am I not receiving notifications",
        a: "If you're not receiving notifications, please check your notification settings to ensure they are configured correctly. Also, make sure that notifications are not being blocked by your browser or device settings."
      }
    ]
  },
  {
    ref: "community-guidelines",
    title: "Community Guidelines",
    answer:
      "Learn about the rules and expectations for participating in the community.",
    icon: <BsBook style={{ height: "2.5rem", width: "2.5rem" }} />,
    help: [
      {
        q: "Where can I find the community guidelines",
        a: "You can find the community guidelines by navigating to the Community Guidelines page, usually located in the footer or navigation menu of the website."
      },
      {
        q: "What happens if I violate the community guidelines",
        a: "Violation of the community guidelines may result in warnings, temporary suspension, or permanent banning from the community, depending on the severity of the violation."
      }
    ]
  },
  {
    ref: "forum-navigation",
    title: "Forum Navigation",
    answer:
      "Learn how to navigate the community forums and find topics of interest.",
    icon: <BsQuestion style={{ height: "2.5rem", width: "2.5rem" }} />,
    help: [
      {
        q: "How do I browse forum topics",
        a: "You can browse forum topics by visiting the 'Forums' section of the website. From there, you can explore different categories, view recent posts, and search for specific topics using the search bar."
      },
      {
        q: "Can I filter forum topics",
        a: "Yes, you can filter forum topics by category, tags, or popularity to find topics that interest you the most. Use the filtering options provided on the forum page to customize your browsing experience."
      }
    ]
  },
  {
    ref: "resource-upload",
    title: "Uploading Resources",
    answer: "Learn how to contribute resources to the community library.",
    icon: <BsBook style={{ height: "2.5rem", width: "2.5rem" }} />,
    help: [
      {
        q: "How do I upload a resource",
        a: "To upload a resource, navigate to the 'Resources' section of the website and click on the 'Upload Resource' button. Fill out the required information, such as title, description, and file upload, and submit the resource for review."
      },
      {
        q: "What types of resources can I upload",
        a: "You can upload a variety of resources, including articles, documents, videos, presentations, and more, as long as they are relevant to the community's interests and comply with the guidelines."
      }
    ]
  },
  {
    ref: "account-deletion",
    title: "Account Deletion",
    answer: "Learn how to permanently delete your account and associated data.",
    icon: <BsUnlock style={{ height: "2.5rem", width: "2.5rem" }} />,
    help: [
      {
        q: "How can I delete my account",
        a: "To delete your account, go to the Account Settings page and find the option for account deletion. Follow the prompts to confirm your decision and permanently delete your account and all associated data."
      },
      {
        q: "Is account deletion reversible",
        a: "No, account deletion is irreversible. Once you delete your account, all data associated with it, including profile information, posts, and comments, will be permanently removed from the system."
      }
    ]
  },
  {
    ref: "community-events",
    title: "Community Events",
    answer:
      "Find information about upcoming events and activities within the community.",
    icon: <BsNewspaper style={{ height: "2.5rem", width: "2.5rem" }} />,
    help: [
      {
        q: "How can I stay updated on community events",
        a: "You can stay updated on community events by visiting the 'Events' section of the website. Here, you'll find information about upcoming events, workshops, webinars, and other activities hosted by the community."
      },
      {
        q: "Can I create my own community event",
        a: "Yes, you can create your own community event by submitting a request through the website's event submission form. Provide details about the event, including date, time, location, and any additional information for participants."
      }
    ]
  }
];
