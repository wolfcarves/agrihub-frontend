import React from "react";
import { QuestionsResponse } from "@api/openapi";
import { Link, useNavigate } from "react-router-dom";
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
    <div className="mt-10 pb-40 w-full sm:pe-10">
      <div className="flex flex-col gap-3">
        <h5 className="font-poppins-semibold tracking-tight">
          Saved Questions
        </h5>
      </div>

      <div className="mt-3">
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <>
            {data?.questions?.length === 0 ? (
              <p>
                No question posted yet.{" "}
                <Link
                  to={"/forum/ask"}
                  className="underline underline-offset-2"
                >
                  add one
                </Link>
              </p>
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
