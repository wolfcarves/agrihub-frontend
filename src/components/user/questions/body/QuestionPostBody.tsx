import parse, { Element } from "html-react-parser";
import QuestionFeedbackPanel from "@components/user/questions/panel/QuestionFeedbackPanel";
import TagChip from "@components/user/questions/chip/TagChip";
import { QuestionViewSchema } from "@api/openapi";
import useQuestionVoteMutation from "@hooks/api/post/useQuestionVoteMutation";
import QuestionUserProfileButton from "../button/QuestionUserProfileButton";
import { toast } from "sonner";
import QuestionVoteButton from "../button/QuestionVoteButton";
import useAuth from "@hooks/useAuth";

interface QuestionPostBodyProps {
  data?: QuestionViewSchema;
}

const QuestionPostBody = ({ data }: QuestionPostBodyProps) => {
  const user = useAuth();

  const pattern = /\bblob\b/;
  let index = 0;

  const { mutateAsync: questionVoteMutate } = useQuestionVoteMutation();

  const handleQuestionVote = async (
    id: string,
    type: "upvote" | "downvote"
  ) => {
    try {
      await questionVoteMutate({
        id,
        requestBody: { type }
      });

      toast.info(`Successfully ${type} a question`);
    } catch (error: any) {
      //
    }
  };

  return (
    <>
      <div className="pb-5 mb-5">
        <h1 className="text-xl text-foreground font-poppins-semibold hover:opacity-90 max-w-2xl break-words">
          {data?.question?.title}
        </h1>
      </div>

      <div className="pb-10">
        <QuestionUserProfileButton
          avatarSrc={data?.question?.user?.avatar}
          username={data?.question?.user?.username}
          createdAt={data?.question?.createdat}
        />
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col">
          {parse(data?.question?.question ?? "", {
            replace: domNode => {
              if (domNode instanceof Element) {
                if (domNode.tagName === "img") {
                  if (pattern.test(domNode.attribs.src)) {
                    const replacedImg = (
                      <img
                        src={data?.question?.imagesrc?.[index]}
                        className="w-full max-w-[450px] my-2"
                      />
                    );
                    index++;
                    return replacedImg;
                  }
                }
              }
            }
          })}
        </div>

        {data?.question?.user?.username !== user.data?.username && (
          <div className="flex flex-col gap-3 items-center md:px-[2rem] px-[.8rem]">
            <QuestionVoteButton
              variant="upvote"
              voteType={data?.question?.vote?.type as "upvote" | "downvote"}
              onClick={() => {
                handleQuestionVote(data?.question?.id || "", "upvote");
              }}
            />

            <span className=" font-semibold">{data?.question?.vote_count}</span>

            <QuestionVoteButton
              variant="downvote"
              voteType={data?.question?.vote?.type as "upvote" | "downvote"}
              onClick={() => {
                handleQuestionVote(data?.question?.id || "", "downvote");
              }}
            />
          </div>
        )}
      </div>

      <div className="mt-20">
        <QuestionFeedbackPanel onSaveBtnClick={() => console.log("test")} />
      </div>

      <div className="flex flex-wrap gap-2 py-5">
        {data?.question?.tags?.map(({ tag }) => {
          return <TagChip key={tag} name={tag} size="base" />;
        })}
      </div>
    </>
  );
};

export default QuestionPostBody;
