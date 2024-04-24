import { SortValues } from "../select/QuestionsFilterSelect";
import { QuestionsResponse } from "@api/openapi";
import { toast } from "sonner";
import useQuestionVoteMutation from "@hooks/api/post/useQuestionVoteMutation";
import QuestionCard from "../card/QuestionCard";
import useQuestionDeleteVoteMutation from "@hooks/api/get/useQuestionDeleteVoteMutation";
import useAuth from "@hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface QuestionsListProps {
  data?: QuestionsResponse;
  isLoading?: boolean;
  onFilterChange?: (selectedValue: SortValues) => void;
}

const QuestionsList = ({ data, isLoading }: QuestionsListProps) => {
  const navigate = useNavigate();
  const authData = useAuth();

  const { mutateAsync: questionVoteMutate } = useQuestionVoteMutation();
  const { mutateAsync: questionDeleteVoteMutate } =
    useQuestionDeleteVoteMutation();

  const handleQuestionVote = async (
    id: string,
    type: "upvote" | "downvote",
    previousVote: "upvote" | "downvote" | null | undefined,
    voteId: string | undefined
  ) => {
    try {
      if (authData?.isAuthenticated) {
        if (voteId && type === previousVote) {
          await questionDeleteVoteMutate(voteId);
        } else {
          await questionVoteMutate({
            id,
            requestBody: { type }
          });
        }
      }
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
    <div className="flex flex-col pb-20">
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
          vote,
          imagesrc
        }) => {
          return (
            <QuestionCard
              key={id}
              id={id}
              userId={user?.id}
              title={title}
              role={user?.role}
              description={question}
              userAvatarSrc={user?.avatar}
              username={user?.username}
              vote={vote?.type as "upvote" | "downvote"}
              voteCount={vote_count}
              answerCount={answer_count}
              createdat={createdat}
              attachment={imagesrc?.length}
              onUpVoteBtnClick={e => {
                e.preventDefault();
                handleQuestionVote(
                  id!,
                  "upvote",
                  vote?.type as "upvote" | "downvote" | null | undefined,
                  vote?.id
                );
              }}
              onDownVoteBtnClick={e => {
                e.preventDefault();
                handleQuestionVote(
                  id!,
                  "downvote",
                  vote?.type as "upvote" | "downvote" | null | undefined,
                  vote?.id
                );
              }}
              onAnswerBtnClick={() => {
                navigate(`question/${user?.username}/${id}`);
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
