import React from "react";
import QuestionCard from "../card/QuestionCard";
import LoadingSpinner from "@icons/LoadingSpinner";
import { SortValues } from "../select/QuestionsFilterSelect";
import { QuestionsResponse } from "@api/openapi";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import useQuestionVoteMutation from "@hooks/api/post/useQuestionVoteMutation";

interface QuestionsListProps {
  data?: QuestionsResponse;
  isLoading?: boolean;
  onFilterChange?: (selectedValue: SortValues) => void;
}

const QuestionsList = ({ data, isLoading }: QuestionsListProps) => {
  const { mutateAsync: questionVoteMutate } = useQuestionVoteMutation();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center pt-10">
        <LoadingSpinner />
      </div>
    );
  }

  const handleQuestionVote = async (
    id: string,
    type: "upvote" | "downvote"
  ) => {
    try {
      await questionVoteMutate({
        id,
        requestBody: { type }
      });
    } catch (error: any) {
      toast.error(error.body.message);
    }
  };

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
      {data?.questions?.map(
        ({
          id,
          title,
          question,
          tags,
          user,
          vote_count,
          answer_count,
          createdat,
          vote
        }) => {
          console.log(vote_count);
          return (
            <Link
              to={`/forum/question/${user?.username}/${id}`}
              key={`${user?.username} + ${title} ${Math.random()}`}
            >
              <QuestionCard
                title={title}
                description={question}
                userAvatarSrc={user?.avatar}
                username={user?.username}
                voteCount={vote_count}
                answerCount={answer_count}
                createdat={createdat}
                onUpVoteBtnClick={e => {
                  e.preventDefault();
                  handleQuestionVote(id!, "upvote");
                }}
                onDownVoteBtnClick={e => {
                  e.preventDefault();
                  handleQuestionVote(id!, "downvote");
                }}
                tags={tags}
                onShareBtnClick={e => {
                  e.preventDefault();
                  handleShare(
                    title,
                    question,
                    `forum/question/${user?.id}/${id}`
                  );
                }}
              />
            </Link>
          );
        }
      )}
    </div>
  );
};

export default QuestionsList;
