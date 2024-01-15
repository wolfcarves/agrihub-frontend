import LoadingSpinner from "@icons/LoadingSpinner";
import { SortValues } from "../select/QuestionsFilterSelect";
import { QuestionsResponse } from "@api/openapi";
import { toast } from "sonner";
import useQuestionVoteMutation from "@hooks/api/post/useQuestionVoteMutation";
import QuestionCard from "../card/QuestionCard";
import useQuestionDeleteVoteMutation from "@hooks/api/post/useQuestionDeleteVoteMutation";
import wink from "@assets/images/wink.gif";
import { useState } from "react";
import useAuth from "@hooks/useAuth";

interface QuestionsListProps {
  data?: QuestionsResponse;
  isLoading?: boolean;
  onFilterChange?: (selectedValue: SortValues) => void;
}

const QuestionsList = ({ data, isLoading }: QuestionsListProps) => {
  const user = useAuth();
  const { mutateAsync: questionVoteMutate } = useQuestionVoteMutation();
  // const { mutateAsync: questionDeleteVoteMutate } =
  //   useQuestionDeleteVoteMutation();

  //For winking ;)
  const [countDown, setCountdown] = useState<number>(0);
  const [isWinkVisible, setIsWinkVisible] = useState<boolean>(false);
  const [winkSrc, setWinkSrc] = useState<string>("");

  const handleQuestionVote = async (
    id: string,
    type: "upvote" | "downvote",
    currentVote: "upvote" | "downvote" | null | undefined
  ) => {
    try {
      //for deleting vote but ain't working
      //  await questionDeleteVoteMutate(id);

      if (countDown === 0 && type === "upvote" && user.isAuthenticated) {
        runCountDown();
      }

      await questionVoteMutate({
        id,
        requestBody: { type }
      });

      toast.info(`Successfully ${type} a question`);
    } catch (error: any) {
      toast.error(error.body.message);
    }
  };

  const runCountDown = () => {
    setWinkSrc(wink + "?a=" + Math.random());
    setIsWinkVisible(true);
    setCountdown(4);

    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev === 1) {
          setIsWinkVisible(false);
          clearInterval(interval);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
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
      {isWinkVisible && (
        <div className="fixed flex z-50 inset-0">
          <img src={winkSrc} />
        </div>
      )}

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
              userAvatarSrc={user?.avatar}
              username={user?.username}
              vote={vote?.type as "upvote" | "downvote"}
              voteCount={vote_count}
              answerCount={answer_count}
              createdat={createdat}
              onUpVoteBtnClick={e => {
                e.preventDefault();
                handleQuestionVote(
                  id!,
                  "upvote",
                  vote?.type as "upvote" | "downvote" | null | undefined
                );
              }}
              onDownVoteBtnClick={e => {
                e.preventDefault();
                handleQuestionVote(
                  id!,
                  "downvote",
                  vote?.type as "upvote" | "downvote" | null | undefined
                );
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
          );
        }
      )}
    </div>
  );
};

export default QuestionsList;
