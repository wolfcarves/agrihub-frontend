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
  }
];
