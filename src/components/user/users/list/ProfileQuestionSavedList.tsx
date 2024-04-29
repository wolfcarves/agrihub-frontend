import React from "react";
import { QuestionsResponse } from "@api/openapi";
import { useNavigate } from "react-router-dom";
import ActivityIndicator from "@icons/ActivityIndicator";
import QuestionCard from "@components/user/questions/card/QuestionCard";
import LoadingSpinner from "@icons/LoadingSpinner";
import BackButton from "@components/ui/custom/button/back-button";

interface ProfileQuestionSavedListProps {
  data?: QuestionsResponse;
  isLoading?: boolean;
}

const ProfileQuestionSavedList = ({
  data,
  isLoading
}: ProfileQuestionSavedListProps) => {
  const navigate = useNavigate();

  if (isLoading) {
    return <LoadingSpinner className="text-primary text-lg mx-auto mt-10" />;
  }

  return (
    <div className="mt-10 pb-40 w-full sm:pe-10">
      <div className="flex flex-col gap-3">
        <h5 className="flex gap-4 items-center font-poppins-semibold tracking-tight">
          <BackButton /> Saved Questions
        </h5>
      </div>

      <div className="mt-3">
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <>
            {data?.questions?.length === 0 ? (
              <p>No saved question.</p>
            ) : (
              data?.questions?.map(
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
                    <QuestionCard
                      key={`${id} + ${title}`}
                      id={id}
                      title={title}
                      description={question}
                      userId={user?.id}
                      userAvatarSrc={user?.avatar}
                      username={user?.username}
                      vote={vote?.type as "upvote" | "downvote"}
                      voteCount={vote_count}
                      answerCount={answer_count}
                      createdat={createdat}
                      onAnswerBtnClick={() => {
                        navigate(`/forum/question/${user?.username}/${id}`);
                      }}
                      tags={tags}
                    />
                  );
                }
              )
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileQuestionSavedList;
