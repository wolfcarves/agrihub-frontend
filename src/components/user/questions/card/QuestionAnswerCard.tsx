import { Answer } from "@api/openapi";
import QuestionFeedbackPanel from "../panel/QuestionFeedbackPanel";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import DOMPurify from "dompurify";
import { useEffect, useRef, useState } from "react";
import QuestionCommentForm from "../form/QuestionCommentForm/QuestionCommentForm";
import useAuth from "@hooks/useAuth";

interface QuestionAnswerListProps {
  data?: Answer;
  isLoading?: boolean;
  isRefetching?: boolean;
}

const QuestionAnswerCard = ({
  data,
  isRefetching
}: QuestionAnswerListProps) => {
  const user = useAuth();
  const [addComment, setAddComment] = useState<boolean>(false);
  const [expandComment, setExpandComment] = useState<boolean>(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const purifyAnswer = DOMPurify.sanitize(data?.answer ?? "");
  const condition = addComment || expandComment;

  useEffect(() => {
    console.log(isRefetching);

    if (isRefetching) {
      setAddComment(true);
      setExpandComment(true);
    }
  }, [isRefetching]);

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
            }  border p-3 rounded-lg`}
          >
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
            onUpVoteBtnClick={() => {}}
            onDownVoteBtnClick={() => {}}
            voteCount={data?.total_vote_count ?? ""}
            onCommentBtnClick={() => {
              setExpandComment(true);
              setAddComment(true);
            }}
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

      {/* Lagyan natin label baka tanong tanong nanaman jan si mam impang , asan comment jan asan yung ganto yung ganto bruh */}

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
              className="flex ps-10 ms-auto gap-2 py-2 "
              key={`${c} + ${index}`}
              onLoad={e => {
                parentRef.current?.style?.setProperty(
                  "height",
                  e.currentTarget.offsetTop + "px"
                );
              }}
            >
              <div className="flex relative h-max rounded-full ">
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
                  className={`-z-50 absolute w-8 h-7 -start-[1.30rem] bottom-4 rounded-b-md border-l-[2.5px] border-b-[2.5px] border-gray-200/90`}
                />
                <div
                  ref={parentRef}
                  className={`-z-50 absolute w-0.5 -start-[1.30rem] bottom-6 rounded-b-md border-l-[2.5px] border-b-[2.5px] border-gray-200/90`}
                />
              </div>

              <div className="">
                <div className="w-full min-w-[12.5rem] border p-3 rounded-lg">
                  <Link to="/" className="font-poppins-medium hover:underline ">
                    {c.user?.username}
                  </Link>

                  <p
                    className="mt-2"
                    dangerouslySetInnerHTML={{
                      __html: purifyComment
                    }}
                  />
                </div>

                <QuestionFeedbackPanel
                  onUpVoteBtnClick={() => {}}
                  onDownVoteBtnClick={() => {}}
                  voteCount={data?.total_vote_count ?? ""}
                />
              </div>
            </div>
          );
        })}

      {condition && (
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
