import React from "react";
import QuestionCard from "../card/QuestionCard";
import LoadingSpinner from "@icons/LoadingSpinner";
import { LabelValues } from "../select/QuestionsFilterSelect";
import { QuestionsResponse } from "@api/openapi";

interface QuestionsListProps {
  data?: QuestionsResponse;
  isLoading?: boolean;
  onFilterChange?: (selectedValue: LabelValues) => void;
}

const QuestionsList = ({ data, isLoading }: QuestionsListProps) => {
  if (isLoading || false) {
    return (
      <div className="flex justify-center items-center pt-10">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-7 pb-20">
      {data?.questions &&
        data?.questions.map(
          ({ title, question, user, vote_count, answer_count }) => (
            <QuestionCard
              key={`${user?.username} + ${title} ${Math.random()}`}
              title={title}
              description={question}
              userAvatarSrc={user?.avatar}
              username={user?.username}
              voteCount={vote_count}
              answerCount={answer_count}
            />
          )
        )}
    </div>
  );
};

export default QuestionsList;

/*
  const handleShare = async (
    title: string | undefined,
    text: string | undefined,
    url: string | undefined
  ) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text,
          url: `${window.location.origin}/${url}`
        });
      } else {
        throw new Error("Web Share API is not supported");
      }
    } catch (error: any) {
      console.error("Error sharing:", error);
      toast(error.message, {
        duration: 2000,
        style: {
          backgroundColor: "#ff5733"
        }
      });
    }
  };

  const navigateToUser = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    userid: string | undefined,
    username: string | undefined
  ) => {
    e.stopPropagation();
    navigate(`/users/${userid}/${username}`);
  };

{data?.questions &&
data?.questions.map((questions, index) => (
  <div
    key={index}
    className="flex flex-col gap-4 border border-border my-5 rounded-lg p-4 shadow-md"
  >
    <div className="grid grid-cols-12">
      <div className="col-span-11 line-clamp-2 text-xl font-semibold">
        {questions.title}
      </div>
      <div className="col-span-1 flex justify-end">
        <BsThreeDots size={25} />
      </div>
    </div>
    <div
      className="cursor-pointer"
      onClick={() =>
        handleNavigateQuestion(questions.user?.username, questions.id)
      }
    >
      <div className="grid grid-cols-7">
        <div className="col-span-3 flex gap-2 items-center flex-nowrap">
          <img
            src={questions.user?.avatar}
            onClick={e =>
              navigateToUser(
                e,
                questions.user?.id,
                questions.user?.username
              )
            }
            className="w-11 h-11 object-center object-cover bg-slate-500 rounded-xl"
          />
          <div>
            <h6 className="font-semibold ">
              {questions.user?.username}
            </h6>
            <p className="text-gray-400">
              {timeAgo(questions.createdat || "")}
            </p>
          </div>
        </div>
        <div className="col-span-4 flex items-start justify-end pt-1 gap-1 flex-wrap">
          {questions.tags?.map((tag, index) => (
            <span
              key={index}
              className="text-primary text-sm bg-secondary border border-primary py-1 px-2 rounded-lg"
            >
              {tag.tag}
            </span>
          ))}
        </div>
      </div>
      <div className="line-clamp-4">
        <div
          dangerouslySetInnerHTML={{
            __html: questions?.question || "<p></p>"
          }}
        />
      </div>
    </div>

    <div className="flex items-center gap-8">
      <div className="flex items-center font-bold gap-2">
        <PiArrowFatUp size={18} />
        {questions.vote_count} <PiArrowFatDown size={18} />
      </div>
      <div className="flex items-center gap-2 font-bold">
        <LuMessagesSquare size={18} /> {questions.answer_count}
      </div>
      <div
        className="flex items-center gap-2 font-bold cursor-pointer"
        onClick={() =>
          handleShare(
            questions.title,
            questions.question,
            `forums/question/${questions.user?.id}/${questions.id}`
          )
        }
      >
        <TiArrowForwardOutline size={20} /> Share
      </div>
    </div>
  </div>
))}

*/
