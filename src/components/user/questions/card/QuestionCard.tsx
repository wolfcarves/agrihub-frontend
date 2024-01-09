import { BsThreeDots } from "react-icons/bs";
import DOMPurify from "dompurify";
import QuestionFeedbackPanel from "../panel/QuestionFeedbackPanel";

interface QuestionCardProps {
  title?: string;
  username?: string;
  userAvatarSrc?: string;
  description?: string | Node;
  voteCount?: string;
  answerCount?: string;
  onShareButtonClick?: (e: React.MouseEvent) => void;
}

const QuestionCard = ({
  title,
  username,
  userAvatarSrc,
  description,
  voteCount,
  answerCount,
  onShareButtonClick
}: QuestionCardProps) => {
  const purifiedDescription = DOMPurify.sanitize(description ?? "", {
    USE_PROFILES: {
      html: true
    }
  });

  return (
    <div className="flex flex-col rounded-xl hover:bg-neutral-300 duration-200 h-max w-full ">
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
        <div className="flex justify-between items-center py-5">
          <div className="flex gap-5">
            <div className="w-12 h-12 border rounded-xl overflow-hidden ">
              <img src={userAvatarSrc} className="object-cover w-full h-full" />
            </div>
            <div className="flex flex-col ">
              <span className="font-poppins-medium">{username}</span>
              <span className="font-poppins-regular text-gray-400 text-sm">
                3 months ago
              </span>
            </div>
          </div>

          <div>Tags here</div>
        </div>

        {/* Content Body */}
        <div>
          <p
            className="font-poppins-regular line-clamp-5 text-foreground"
            dangerouslySetInnerHTML={{
              __html: purifiedDescription
            }}
          />
        </div>

        {/* Actions */}
        <QuestionFeedbackPanel
          {...{ answerCount }}
          {...{ voteCount }}
          {...{ onShareButtonClick }}
        />
      </div>
    </div>
  );
};

export default QuestionCard;
