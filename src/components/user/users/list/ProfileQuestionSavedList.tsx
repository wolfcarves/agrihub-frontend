import React from "react";
import { QuestionsResponse } from "@api/openapi";
import { useNavigate } from "react-router-dom";
import ActivityIndicator from "@icons/ActivityIndicator";
import QuestionCard from "@components/user/questions/card/QuestionCard";
import LoadingSpinner from "@icons/LoadingSpinner";

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
    <div className="flex flex-col gap-5 mx-auto w-full max-w-[50rem] py-10">
      <h5 className="font-poppins-medium">Saved Posts</h5>

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
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
          )}
        </>
      )}
    </div>
  );
};

export default ProfileQuestionSavedList;
