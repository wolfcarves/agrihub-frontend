import UserSettingsTitle from "@components/user/settings/form/UserSettingsProfileTitle/UserSettingsTitle";
import UserSettingsAuthenticationForm from "@components/user/settings/form/form/UserSettingsAuthentication/UserSettingsAuthenticationForm";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const UserSettingsAuthentication = () => {
  return (
    <>
      <UserSettingsTitle title="Authentication" />
      <UserSettingsAuthenticationForm />
    </>
  );
};

export default withAuthGuard(UserSettingsAuthentication, [
  "member",
  "admin",
  "asst_admin",
  "farm_head",
  "farmer",
  "subfarm_head"
]);
