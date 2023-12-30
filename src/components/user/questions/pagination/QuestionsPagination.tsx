import React from "react";
import Pagination from "@components/ui/custom/pagination/Pagination";

const QuestionsPagination = () => {
  return (
    <div className="py-10 mx-auto">
      <Pagination
        initialPage={0}
        totalPages={500}
        onPageChange={n => console.log(n)}
      />
    </div>
  );
};

export default QuestionsPagination;
