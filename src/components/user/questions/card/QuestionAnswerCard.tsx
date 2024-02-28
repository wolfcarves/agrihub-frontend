import { Answer } from "@api/openapi";
import QuestionFeedbackPanel from "../panel/QuestionFeedbackPanel";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import DOMPurify from "dompurify";
import { useRef, useState } from "react";
import QuestionCommentForm from "../form/QuestionCommentForm/QuestionCommentForm";
import useAuth from "@hooks/useAuth";
import useForumsVoteAnswerMutation from "@hooks/api/post/useForumsVoteAnswerMutation";
import useForumsDeleteVoteAnswerMutation from "@hooks/api/post/useForumsDeleteVoteAnswerMutation";
import { MdOutlineEdit, MdOutlineDelete } from "react-icons/md";

interface QuestionAnswerListProps {
  data?: Answer;
  isLoading?: boolean;
  isRefetching?: boolean;
}

const QuestionAnswerCard = ({ data }: QuestionAnswerListProps) => {
  const user = useAuth();
  const [addComment, setAddComment] = useState<boolean>(false);
  const [expandComment, setExpandComment] = useState<boolean>(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const purifyAnswer = DOMPurify.sanitize(data?.answer ?? "");
  const isAnswerOwned = data?.user?.id === user?.data?.id;

  const showCommentForm =
    addComment || (expandComment && user?.isAuthenticated);

  const { mutateAsync: voteAnswer } = useForumsVoteAnswerMutation();
  const { mutateAsync: deleteVoteAnswer } = useForumsDeleteVoteAnswerMutation();

  const handleVoteAnswer = async (
    id?: string,
    type?: "upvote" | "downvote"
  ) => {
    try {
      if (data?.vote?.type !== undefined) {
        return await deleteVoteAnswer({ id: data?.vote?.id });
      }

      await voteAnswer({ id, type });
    } catch (error: any) {
      console.log(error.body.message);
    }
  };

  return (
    <div className="relative w-full">
      {/* Answers */}
      <div className="flex gap-2 py-4">
        <div className="relative flex h-max rounded-full">
          <Link to="/" className="font-poppins-medium hover:opacity-80">
            <Avatar className="border">
              <AvatarImage
                src={data?.user?.avatar ?? ""}
                className="object-cover pointer-events-none select-none "
              />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </Link>
        </div>

        <div className="flex flex-col">
          <div
            className={`${
              data?.isaccepted &&
              "accepted-answer text-white border-red-700 border-2"
            }  relative border p-2 sm:p-3 rounded-lg group`}
          >
            {isAnswerOwned && (
              <div className="hidden group-hover:flex gap-1 absolute -bottom-3 end-3">
                <div className="w-8 h-8 rounded-full border bg-background">
                  <button className="w-full h-full">
                    <MdOutlineEdit className="m-auto" />
                  </button>
                </div>
                <div className="w-8 h-8 rounded-full border bg-background">
                  <button className="w-full h-full">
                    <MdOutlineDelete className="m-auto" />
                  </button>
                </div>
              </div>
            )}

            <Link to="/" className="font-poppins-medium hover:underline ">
              {data?.user?.username}
            </Link>

            <p
              className="mt-2"
              dangerouslySetInnerHTML={{
                __html: purifyAnswer
              }}
            />
          </div>

          <QuestionFeedbackPanel
            onUpVoteBtnClick={() => {
              handleVoteAnswer(data?.id, "upvote");
            }}
            onDownVoteBtnClick={() => {
              handleVoteAnswer(data?.id, "downvote");
            }}
            vote={(data?.vote?.type as "upvote" | "downvote") ?? undefined}
            voteCount={data?.upvote_count ?? ""}
            onCommentBtnClick={
              user?.isAuthenticated
                ? () => {
                    setAddComment(true);
                    setExpandComment(true);
                  }
                : undefined
            }
            onCommentExpandBtnClick={
              data?.comments?.length &&
              data?.comments?.length > 1 &&
              !expandComment
                ? () => {
                    setExpandComment(true);
                  }
                : undefined
            }
          />
        </div>
      </div>

      {data?.comments && data?.comments.length > 1 && (
        <span className="flex ps-10 ms-auto gap-2 py-2 text-sm">Comments</span>
      )}

      {/* Comments */}
      {data?.comments
        ?.slice(0, expandComment ? data?.comments?.length : 1)
        .map((c, index) => {
          const purifyComment = DOMPurify.sanitize(c.comment ?? "");

          return (
            <div
              className="flex ps-10 ms-auto gap-2 py-2"
              key={`${c} + ${index}`}
              onLoad={e => {
                parentRef.current?.style?.setProperty(
                  "height",
                  e.currentTarget.offsetTop + "px"
                );
              }}
            >
              <div className="flex relative h-max rounded-full">
                <Link to="/" className="font-poppins-medium hover:opacity-80">
                  <Avatar className="border">
                    <AvatarImage
                      src={c.user?.avatar ?? ""}
                      className="object-cover pointer-events-none select-none "
                    />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                </Link>

                <div
                  className={`-z-50 absolute w-6 h-7 -start-[1.30rem] bottom-4 rounded-bl-md border-l-[1px] border-b-[1px] border-gray-200/90`}
                />
                <div
                  ref={parentRef}
                  className={`-z-50 absolute w-0.5 -start-[1.30rem] bottom-6 rounded-b-md border-l-[1px] border-b-[1px] border-gray-200/90`}
                />
              </div>

              <div className="">
                <div className="min-w-[12.5rem] border max-w-[40rem] p-3 rounded-lg">
                  <Link to="/" className="font-poppins-medium hover:underline">
                    {c.user?.username}
                  </Link>

                  <p
                    className="mt-2 w-full break-all "
                    dangerouslySetInnerHTML={{
                      __html: purifyComment
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}

      {showCommentForm && (
        <div className="flex flex-col gap-3 ps-10 mt-2">
          <span className="ps-12 text-sm">
            You're commenting to{" "}
            {data?.user?.username === user?.data?.username
              ? "yourself"
              : data?.user?.username}
          </span>
          <QuestionCommentForm answerId={data?.id} />
        </div>
      )}
    </div>
  );
};

export default QuestionAnswerCard;
