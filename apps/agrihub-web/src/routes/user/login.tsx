import UserLoginLayout from "@components/user/UserLayouts/UserLoginLayout";
import UserLoginForm from "@components/user/UserForms/UserLoginForm";
import UserLoginHeader from "@components/user/UserHeaders/UserLoginHeader";

export default function Login() {
  return (
    <UserLoginLayout>
      <UserLoginHeader />
      <UserLoginForm />
    </UserLoginLayout>
  );
}
