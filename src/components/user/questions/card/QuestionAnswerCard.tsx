import { Answer } from "@api/openapi";
import QuestionAnswerFeedbackPanel from "../panel/QuestionAnswerFeedbackPanel";
import { timeAgo } from "@components/lib/utils";
import QuestionFeedbackPanel from "../panel/QuestionFeedbackPanel";
import QuestionUserProfileButton from "../button/QuestionUserProfileButton";
import { FaCheck } from "react-icons/fa";

interface QuestionAnswerListProps {
  data?: Answer;
}

const QuestionAnswerCard = ({ data }: QuestionAnswerListProps) => {
  return (
    <div>
      <div className="border-b py-4">
        <div className="flex items-center justify-between mt-10">
          <QuestionUserProfileButton
            avatarSrc={data?.user?.avatar}
            username={data?.user?.username}
            createdAt={data?.createdat}
          />

          {data?.isaccepted && (
            <span className="flex text-sm gap-3 items-center font-poppins-medium h-max text-primary">
              Accepted Answer
              <span className="text-lg -mt-3">
                <FaCheck />
              </span>
            </span>
          )}
        </div>

        <div className="py-5">
          <p>{data?.answer}</p>
        </div>

        <div>
          <QuestionFeedbackPanel
            onUpVoteBtnClick={() => {}}
            onDownVoteBtnClick={() => {}}
            voteCount={data?.total_vote_count ?? ""}
            onCommentBtnClick={() => {}}
          />
        </div>
      </div>

      {data?.comments?.slice(0, 1).map(item => {
        return (
          <div
            key={`${item} + ${Math.random()}`}
            className="w-[95%] ms-auto border-b pt-10 pb-5"
          >
            <QuestionUserProfileButton
              avatarSrc={data?.user?.avatar}
              username={data?.user?.username}
              createdAt={data?.createdat}
            />

            <div className="py-5">
              <p>{item?.comment}</p>
            </div>

            <div>
              <QuestionFeedbackPanel
                onUpVoteBtnClick={() => {}}
                onDownVoteBtnClick={() => {}}
                voteCount={data?.total_vote_count ?? ""}
                onCommentBtnClick={() => {}}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionAnswerCard;
