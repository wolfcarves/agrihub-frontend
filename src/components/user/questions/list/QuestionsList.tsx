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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center pt-10">
        <LoadingSpinner />
      </div>
    );
  }

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
          return (
            //ginanto ko muna para maayos lang yung hover issue , nafigure out ko na problem saka nalang ayusin or kahit di na XD
            <div
              className="flex flex-col rounded-xl hover:bg-neutral-300 duration-200 h-max w-full"
              key={`${id} + ${title}`}
            >
              <Link to={`question/${user?.username}/${id}`}>
                <div className="flex flex-col bg-white border p-5 rounded-xl min-h-[20rem] h-full max-h-[25rem] hover:shadow-sm hover:-translate-y-2 hover:-translate-x-2 duration-200">
                  <QuestionCard
                    title={title}
                    description={question}
                    userAvatarSrc={user?.avatar}
                    username={user?.username}
                    vote={vote?.type as "upvote" | "downvote"}
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
                </div>
              </Link>
            </div>
          );
        }
      )}
    </div>
  );
};

export default QuestionsList;
