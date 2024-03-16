import UserSettingsTitle from "@components/user/settings/form/UserSettingsProfileTitle/UserSettingsTitle";
import UserSettingsAuthenticationForm from "@components/user/settings/form/form/UserSettingsAuthentication/UserSettingsAuthenticationForm";

const UserSettingsAuthentication = () => {
  return (
    <>
      <UserSettingsTitle title="Authentication" />
      <UserSettingsAuthenticationForm />
    </>
  );
};

export default UserSettingsAuthentication;
