import UserFormContainer from "@components/user/UserContainers/UserFormContainer";
import UserSignupForm from "@components/user/UserForms/UserSignupForm/UserSignupForm";
import UserSignupFormTitle from "@components/user/UserTitle/UserSignupFormTitle";
import axios from "axios";
import { useEffect } from "react";

export default function Signup() {
  useEffect(() => {
    const getUser = async () => {
      const res = await axios({
        method: "get",
        url: "https://qc-agrihub.xyz/api/auth/me",
        withCredentials: true
      });

      console.log(res);
    };

    getUser();
  });

  return (
    <UserFormContainer>
      <UserSignupFormTitle />
      <UserSignupForm />
    </UserFormContainer>
  );
}
