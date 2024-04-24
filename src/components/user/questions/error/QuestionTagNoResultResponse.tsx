import BackButton from "@components/ui/custom/button/back-button";
import React from "react";

const QuestionTagNoResultResponse = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-5 mx-auto w-max">
        <h5 className="w-max font-poppins-medium text-foreground/70">
          No result for the tag you're looking for.
        </h5>

        <BackButton title="Go back instead" />
      </div>
    </div>
  );
};

export default QuestionTagNoResultResponse;
