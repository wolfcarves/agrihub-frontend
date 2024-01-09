import { BsThreeDots } from "react-icons/bs";
import DOMPurify from "dompurify";
import QuestionFeedbackPanel from "../panel/QuestionFeedbackPanel";
import parse, { Element } from "html-react-parser";
import TagChip from "../chip/TagChip";
import { timeAgo } from "@components/lib/utils";

interface QuestionCardProps {
  title?: string;
  username?: string;
  userAvatarSrc?: string;
  description?: string | Node;
  tags?: {
    tag?: string | undefined;
  }[];
  voteCount?: string;
  answerCount?: string;
  createdat?: string;
  onUpVoteBtnClick?: (e: React.MouseEvent) => void;
  onDownVoteBtnClick?: (e: React.MouseEvent) => void;
  onShareBtnClick?: (e: React.MouseEvent) => void;
}

const QuestionCard = ({
  title,
  username,
  userAvatarSrc,
  description,
  tags,
  voteCount,
  answerCount,
  createdat,
  onUpVoteBtnClick,
  onDownVoteBtnClick,
  onShareBtnClick
}: QuestionCardProps) => {
  const purifiedDescription = DOMPurify.sanitize(description ?? "", {
    USE_PROFILES: {
      html: true
    }
  });

  const contentHtml = parse(purifiedDescription, {
    replace: domNode => {
      if (domNode instanceof Element) {
        if (domNode.tagName === "img") {
          const replacedImg = <></>;
          return replacedImg;
        }
      }
    }
  });

  return (
    <div className="flex flex-col rounded-xl hover:bg-neutral-300 duration-200 h-max w-full">
      <div className="flex flex-col bg-white border p-5 rounded-xl min-h-[20rem] h-full max-h-[25rem] cursor-pointer hover:shadow-sm hover:-translate-y-2 hover:-translate-x-2 duration-200">
        {/* Card Title */}
        <div className="flex items-start justify-between">
          <h1 className="text-xl text-foreground font-poppins-semibold line-clamp-2 hover:underline hover:opacity-90">
            {title}
          </h1>

          <button
            className="text-xl p-2 rounded-md hover:bg-accent opacity-80 hover:opacity-100 duration-200"
            onClick={e => {
              e.preventDefault();
            }}
          >
            <BsThreeDots />
          </button>
        </div>

        {/* Name and Tags */}
        <div className="flex flex-wrap gap-3 justify-between items-center py-5">
          <div className="flex gap-5">
            <div className="w-12 h-12 border rounded-xl overflow-hidden ">
              <img src={userAvatarSrc} className="object-cover w-full h-full" />
            </div>
            <div className="flex flex-col ">
              <span className="font-poppins-medium">{username}</span>
              <span className="font-poppins-regular text-gray-400 textz-sm">
                {timeAgo(createdat as string)}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 py-5">
            {tags?.map(({ tag }) => {
              return <TagChip key={Math.random()} name={tag} size="sm" />;
            })}
          </div>
        </div>

        {/* Content Body */}
        <div className="line-clamp-5">{contentHtml}</div>

        {/* Actions */}
        <QuestionFeedbackPanel
          {...{ answerCount }}
          {...{ voteCount }}
          {...{ onUpVoteBtnClick }}
          {...{ onDownVoteBtnClick }}
          {...{ onShareBtnClick }}
        />
      </div>
    </div>
  );
};

export default QuestionCard;
