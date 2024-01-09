import { Answer } from "@api/openapi";
import QuestionAnswerFeedbackPanel from "../panel/QuestionAnswerFeedbackPanel";
import { timeAgo } from "@components/lib/utils";
import QuestionFeedbackPanel from "../panel/QuestionFeedbackPanel";

interface QuestionAnswerListProps {
  data?: Answer;
}

const QuestionAnswerCard = ({ data }: QuestionAnswerListProps) => {
  return (
    <>
      <div className="border-b py-4">
        <div className="flex items-center justify-between mt-10">
          <div className="flex gap-4">
            <div className="w-12 h-12 border rounded-xl overflow-hidden ">
              <img
                src={data?.user?.avatar}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col ">
              <span className="font-poppins-medium">
                {data?.user?.username}
              </span>
              <span className="font-poppins-regular text-gray-400 text-sm">
                {timeAgo(data?.createdat ?? "")}
              </span>
            </div>
          </div>

          <div>Accepted</div>
        </div>

        <div className="py-5">
          <p>{data?.answer}</p>
        </div>

        <div>
          <QuestionFeedbackPanel answerCount={data?.total_vote_count ?? ""} />
        </div>
      </div>

      {data?.comments?.map(item => {
        return (
          <div
            key={`${item} + ${Math.random()}`}
            className="w-[95%] ms-auto border-b py-4"
          >
            <div className="flex items-center justify-between mt-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 border rounded-xl overflow-hidden ">
                  <img
                    src={item.user?.avatar}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col ">
                  <span className="font-poppins-medium">
                    {item?.user?.username}
                  </span>
                  <span className="font-poppins-regular text-gray-400 text-sm">
                    {timeAgo(item?.createdat ?? "")}
                  </span>
                </div>
              </div>
            </div>

            <div className="py-5">
              <p>{item?.comment}</p>
            </div>

            <div>
              <QuestionFeedbackPanel />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default QuestionAnswerCard;
