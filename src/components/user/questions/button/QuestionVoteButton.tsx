import withRequireAuth from "@higher-order/account/withRequireAuth";
import { ComponentProps } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

interface QuestionVoteButtonProps extends ComponentProps<"button"> {
  variant: "upvote" | "downvote";
  voteType?: "upvote" | "downvote";
}

const QuestionVoteButton = ({
  variant,
  voteType,
  ...props
}: QuestionVoteButtonProps) => {
  if (variant === "upvote") {
    return (
      <button
        className={`p-4 border border-gray bg-gray-100 text-foreground rounded-lg hover:rounded-[100px] transition-all duration-300 ${
          voteType === "upvote" && "rounded-[100px] border-primary bg-secondary"
        } `}
        {...props}
      >
        <BiSolidUpArrow />
      </button>
    );
  }

  if (variant === "downvote") {
    return (
      <button
        className={`p-4 border border-gray bg-gray-100 text-foreground rounded-lg hover:rounded-[100px] transition-all duration-300 ${
          voteType === "downvote" && "rounded-[100px] border-red-500 bg-red-100"
        } `}
        {...props}
      >
        <BiSolidDownArrow />
      </button>
    );
  }
};

export default withRequireAuth(QuestionVoteButton);
