import UserFinalSetupForm from "@components/user/forms/UserFinalSetupForm/UserFinalSetupForm";
import UserFormTitle from "@components/user/title/UserFormTitle";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const FinalSetup = () => {
  return (
    <>
      <UserFormTitle
        title="What are you into?"
        description={
          "Picking tags will help us show you much more relevant questions and answers."
        }
        center
        className="mb-16"
      />
      <UserFinalSetupForm />
    </>
  );
};

export default withAuthGuard(FinalSetup);
