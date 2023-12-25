import React, { useState } from "react";
import { timeAgo } from "../../../lib/utils";
import { CommentsSchema, QuestionViewSchema } from "../../../../api/openapi";
import { TbMessages } from "react-icons/tb";
import { GoReport } from "react-icons/go";
import { TbMessageCirclePlus } from "react-icons/tb";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { UserAuth } from "../../../../providers/AuthProvider";
import { Input } from "../../../ui/input";
import CommentCard from "./CommentCard";
import useQuestionComment from "../../../../hooks/api/post/useQuestionComment";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AddComment } from "./schema";
// interface AnswerCardProps {
//   data: QuestionViewSchema | undefined;
// }
const AnswerCard = ({ answer }: any) => {
  const [reply, setReply] = useState(false);
  const [comment, setComment] = useState(false);
  const { data: currentUser } = UserAuth() ?? {};

  const { mutateAsync: questionCommentMutate, isLoading } =
    useQuestionComment();

  const form = useForm<CommentsSchema>({
    resolver: zodResolver(AddComment),
    mode: "onChange"
  });
  const handleCommentSubmit = async (data: CommentsSchema) => {
    console.log("first");
    const raw = {
      comment: data.comment
    };

    try {
      await questionCommentMutate({
        answerId: answer.id,
        userComment: raw
      });

      return;
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const onClickReply = () => {
    if (reply) {
      setReply(false);
    } else {
      setReply(true);
    }
  };
  const onClickViewComment = () => {
    if (comment) {
      setComment(false);
    } else {
      setComment(true);
    }
  };

  return (
    <div>
      <div className="col-span-3 flex gap-2 items-center flex-nowrap">
        <img
          src={answer.user.avatar}
          className="w-11 h-11 object-center object-cover bg-slate-500 rounded-xl"
        />
        <div>
          <h6 className=" font-semibold ">{answer.user.username}</h6>
          <p className="text-gray-400 text-sm">
            {timeAgo(answer.createdat || "")}
          </p>
        </div>
      </div>
      <div className="border-l-2 ml-5 pl-8 mt-2">
        <div className="">
          <div
            className="leading-loose"
            dangerouslySetInnerHTML={{
              __html: answer.answer || "<p></p>"
            }}
          />
        </div>
        <div className="flex gap-8 mt-3 mb-5">
          <div
            className="flex items-center gap-3 hover:underline"
            role="button"
          >
            <span className="">
              <IoIosArrowUp size={20} />
            </span>
            <span className=" ">{answer.total_vote_count}</span>
            <span className="">
              <IoIosArrowDown size={20} />
            </span>
          </div>
          <div
            className="flex items-center gap-2 hover:underline select-none"
            role="button"
            onClick={onClickReply}
          >
            <span className="">
              <TbMessageCirclePlus size={20} />
            </span>
            <span className="">Reply</span>
          </div>
          <div
            className="flex items-center gap-2 hover:underline select-none"
            role="button"
          >
            <span className="">
              <GoReport size={20} />
            </span>
            <span className=" ">Report</span>
          </div>
          {answer.comments.length > 0 && (
            <div
              className="flex items-center gap-2 hover:underline select-none"
              role="button"
              onClick={onClickViewComment}
            >
              <span className="">
                <TbMessages size={20} />
              </span>
              <span className=" ">View {answer.comments.length} comments</span>
            </div>
          )}
        </div>
        {currentUser && reply && (
          <form onSubmit={form.handleSubmit(handleCommentSubmit)}>
            <p className="ms-[3.5rem] text-gray-500 font-medium text-sm mb-1">
              Reply as {currentUser?.username}
            </p>
            <div className="flex items-center gap-2 pb-4">
              <img
                src={currentUser?.avatar}
                className="h-11 w-11 rounded-full border "
              />
              <div className="w-full">
                <Input
                  {...form.register("comment")}
                  placeholder="Type your reply here..."
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-white py-2 px-6 rounded-3xl text-sm "
              >
                <span>Send</span>
              </button>
            </div>
            <hr className="mb-2" />
          </form>
        )}
        <hr />
        {comment &&
          answer.comments.map((comment: any, i: number) => (
            <CommentCard key={i} comment={comment} />
          ))}
      </div>
    </div>
  );
};

export default AnswerCard;
