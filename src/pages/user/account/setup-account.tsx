import UserFormContainer from "@pages/components/user/UserContainers/UserFormContainer";
import UserProfileCompletionForm from "@pages/components/user/UserForms/UserProfileCompletionForm/UserProfileCompletionForm";
import UserFormTitle from "@pages/components/user/UserTitle/UserFormTitle";

const SetupAccount = () => {
  return (
    <UserFormContainer>
      <UserFormTitle title="Setup Account" size="3xl" />
      <UserProfileCompletionForm />
    </UserFormContainer>
  );
};

export default SetupAccount;
