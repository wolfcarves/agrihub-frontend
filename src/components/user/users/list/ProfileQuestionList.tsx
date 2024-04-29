import React from "react";
import { QuestionsResponse } from "@api/openapi";
import { Link, useNavigate } from "react-router-dom";
import ActivityIndicator from "@icons/ActivityIndicator";
import QuestionCard from "@components/user/questions/card/QuestionCard";
import BackButton from "@components/ui/custom/button/back-button";

interface ProfileQuestionListProps {
  isOwn?: boolean;
  data?: QuestionsResponse;
  isLoading?: boolean;
}

const ProfileQuestionList = ({
  isOwn,
  data,
  isLoading
}: ProfileQuestionListProps) => {
  const navigate = useNavigate();

  return (
    <div className="mt-10 pb-40 w-full sm:pe-10">
      <div className="flex flex-col gap-3">
        <h5 className="flex items-center gap-4 font-poppins-semibold tracking-tight">
          <BackButton />
          {isOwn ? "Your Posts" : "Posts"}
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

export default ProfileQuestionList;
