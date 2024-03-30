import withAuthGuard from "@higher-order/account/withAuthGuard";
import OutletContainer from "@components/user/questions/container/OutletContainer";
import QuestionEditForm from "@components/user/questions/form/QuestionEditForm/QuestionEditForm";

const QuestionEdit = () => {
  return (
    <OutletContainer className="pt-14 px-1">
      <QuestionEditForm />
    </OutletContainer>
  );
};

export default withAuthGuard(QuestionEdit, [
  "member",
  "admin",
  "farmer",
  "farm_head",
  "asst_admin",
  "subfarm_head"
]);
