import React from "react";
import { QuestionsResponse } from "@api/openapi";
import { useNavigate } from "react-router-dom";
import ActivityIndicator from "@icons/ActivityIndicator";
import QuestionCard from "@components/user/questions/card/QuestionCard";
import LoadingSpinner from "@icons/LoadingSpinner";

interface ProfileQuestionListProps {
  data?: QuestionsResponse;
  isLoading?: boolean;
}

const ProfileQuestionList = ({ data, isLoading }: ProfileQuestionListProps) => {
  const navigate = useNavigate();

  if (isLoading) {
    return <LoadingSpinner className="text-primary text-lg mx-auto mt-10" />;
  }

  return (
    <div className="flex flex-col items-center mx-auto w-full max-w-[50rem] py-10">
      <div className="w-full mb-10">
        <h5 className="text-start font-poppins-medium">Recent Posts</h5>
      </div>

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

export default ProfileQuestionList;
