import OutletContainer from "@components/user/questions/container/OutletContainer";
import TagsList from "@components/user/questions/list/TagList";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const QuestionTags = () => {
  return (
    <OutletContainer>
      <TagsList />
    </OutletContainer>
  );
};

export default withAuthGuard(QuestionTags, ["guest"]);
