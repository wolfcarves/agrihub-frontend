import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import parse, { Element } from "html-react-parser";
import QuestionFeedbackPanel from "@components/user/questions/panel/QuestionFeedbackPanel";
import TagChip from "@components/user/questions/chip/TagChip";
import { timeAgo } from "@components/lib/utils";
import { QuestionViewSchema } from "@api/openapi";

interface QuestionPostBodyProps {
  data?: QuestionViewSchema;
}

const QuestionPostBody = ({ data }: QuestionPostBodyProps) => {
  let index = 0;
  return (
    <>
      <div className="pb-5">
        <h1 className="text-2xl text-foreground font-poppins-semibold line-clamp-3 hover:opacity-90">
          {data?.question?.title}
        </h1>
      </div>

      <div className="flex flex-col">
        <div className="flex gap-3 pb-5">
          <img
            src={data?.question?.user?.avatar}
            className="w-11 h-11 object-center object-cover bg-slate-500 rounded-lg"
          />

          <div>
            <h6 className="font-poppins-medium ">
              {data?.question?.user?.username}
            </h6>
            <p className="text-gray-400 text-sm">
              {timeAgo(data?.question?.createdat || "")}
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col">
            {parse(data?.question?.question ?? "", {
              replace: domNode => {
                if (domNode instanceof Element) {
                  if (domNode.tagName === "img") {
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
            })}
          </div>

          <div className="flex flex-col gap-3 items-center md:px-[2rem] px-[.8rem]">
            <span
              role="button"
              className={
                data?.question?.vote?.type === "upvote"
                  ? "bg-[#F3F3F3] rounded-full p-4 text-secondary bg-primary"
                  : "bg-[#F3F3F3] rounded-full p-4"
              }
            >
              <BiSolidUpArrow />
            </span>
            <span className=" font-semibold">
              {/* {data?.question?.vote_count} */}
              399
            </span>
            <span
              role="button"
              className={
                data?.question?.vote?.type === "downvote"
                  ? "bg-[#F3F3F3] rounded-full p-4 text-secondary bg-primary"
                  : "bg-[#F3F3F3] rounded-full p-4"
              }
            >
              <BiSolidDownArrow />
            </span>
          </div>
        </div>

        <QuestionFeedbackPanel onSaveBtnClick={() => console.log("test")} />

        <div className="flex flex-wrap gap-2 py-5">
          {data?.question?.tags?.map(({ tag }) => {
            return <TagChip key={Math.random()} name={tag} size="base" />;
          })}
        </div>
      </div>
    </>
  );
};

export default QuestionPostBody;
