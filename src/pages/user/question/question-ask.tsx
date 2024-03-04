import withAuthGuard from "@higher-order/account/withAuthGuard";
import OutletContainer from "@components/user/questions/container/OutletContainer";
import QuestionAskForm from "@components/user/questions/form/QuestionAskForm/QuestionAskForm";

const QuestionAsk = () => {
  return (
    <OutletContainer className="pt-14 px-1">
      <QuestionAskForm />
    </OutletContainer>
  );
};

export default withAuthGuard(QuestionAsk, [
  "member",
  "admin",
  "farmer",
  "farm_head",
  "asst_admin",
  "subfarm_head"
]);
