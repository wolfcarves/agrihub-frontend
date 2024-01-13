import {
  UserAside,
  UserAsideTitle,
  UserAsideItem,
  UserAsideItemContent
} from "@components/ui/custom";

const QuestionAskAside = () => {
  return (
    <UserAside className="min-w-[350px] border-transparent">
      <div className="p-2 rounded-md border border-primary bg-secondary">
        <UserAsideTitle className="text-xl">
          Writing a good question
        </UserAsideTitle>
        <UserAsideItemContent className="mt-10 text-sm">
          You’re ready to ask a Farming-related question and this form will help
          guide you through the process. Looking to ask a non farming-related
          question? See the topics here to find a relevant site.
        </UserAsideItemContent>

        <UserAsideTitle className="text-lg mt-10">Steps</UserAsideTitle>

        <UserAsideItemContent className="mt-10 text-sm list-disc">
          <ul className="list-disc ps-4">
            <li className="my-3 ">
              Now this is a story all about how, my life got flipped-turned
              upside down
            </li>
            <li className="my-3 ">Describe your problem in more detail.</li>
            <li className="my-3 ">
              Add “tags” which help surface your question to members of the
              community.
            </li>
            <li className="my-3 ">
              Review your question and post it to the site.
            </li>
          </ul>
        </UserAsideItemContent>
      </div>
    </UserAside>
  );
};

export default QuestionAskAside;
