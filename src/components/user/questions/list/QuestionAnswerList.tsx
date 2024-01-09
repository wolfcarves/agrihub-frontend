import React from "react";
import { QuestionViewSchema } from "@api/openapi";
import QuestionAnswerCard from "../card/QuestionAnswerCard";

interface QuestionAnswerListProps {
  data?: QuestionViewSchema;
}

const QuestionAnswerList = ({ data }: QuestionAnswerListProps) => {
  console.log();

  return (
    <div>
      <h1>Answers 32</h1>

      {data?.question?.answers?.map(data => {
        return (
          <QuestionAnswerCard key={`${data} + ${Math.random()}`} data={data} />
        );
      })}
    </div>
  );
};

export default QuestionAnswerList;
