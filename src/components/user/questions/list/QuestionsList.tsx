import React from "react";
import QuestionCard from "../card/QuestionCard";
import LoadingSpinner from "@icons/LoadingSpinner";
import { SortValues } from "../select/QuestionsFilterSelect";
import { QuestionsResponse } from "@api/openapi";
import { toast } from "sonner";

interface QuestionsListProps {
  data?: QuestionsResponse;
  isLoading?: boolean;
  onFilterChange?: (selectedValue: SortValues) => void;
}

const QuestionsList = ({ data, isLoading }: QuestionsListProps) => {
  if (isLoading || false) {
    return (
      <div className="flex justify-center items-center pt-10">
        <LoadingSpinner />
      </div>
    );
  }

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

  return (
    <div className="flex flex-col gap-7 pb-20">
      {data?.questions &&
        data?.questions.map(
          ({ id, title, question, user, vote_count, answer_count }) => (
            <QuestionCard
              key={`${user?.username} + ${title} ${Math.random()}`}
              title={title}
              description={question}
              userAvatarSrc={user?.avatar}
              username={user?.username}
              voteCount={vote_count}
              answerCount={answer_count}
              onShareButtonClick={e => {
                e.preventDefault();

                handleShare(
                  title,
                  question,
                  `forum/question/${user?.id}/${id}`
                );
              }}
            />
          )
        )}
    </div>
  );
};

export default QuestionsList;
