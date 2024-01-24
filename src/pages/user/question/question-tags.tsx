import OutletContainer from "@components/user/questions/container/OutletContainer";
import TagList from "@components/user/questions/list/TagList";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const QuestionTags = () => {
  return (
    <OutletContainer>
      <TagList />
    </OutletContainer>
  );
};

export default QuestionTags
