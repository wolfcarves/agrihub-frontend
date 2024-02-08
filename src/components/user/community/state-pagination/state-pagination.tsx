import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "../../../ui/pagination";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const StatePagination = ({
  currentPage,
  totalPages,
  onPageChange
}: PaginationProps) => {
  const renderButtons = () => {
    const buttons = [];
    const numButtonToShow = 5;

    let startPage = Math.max(1, currentPage - Math.floor(numButtonToShow / 2));
    let endPage = Math.min(totalPages, startPage + numButtonToShow - 1);

    if (endPage - startPage + 1 < numButtonToShow) {
      startPage = Math.max(1, endPage - numButtonToShow + 1);
    }

    if (startPage > 1) {
      buttons.push(
        <PaginationLink
          key={1}
          onClick={() => onPageChange(1)}
          isActive={currentPage === 1}
        >
          1
        </PaginationLink>
      );
      if (startPage > 2) {
        buttons.push(<PaginationEllipsis key="ellipsis-start" />);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <PaginationLink
          key={i}
          onClick={() => onPageChange(i)}
          isActive={currentPage === i}
        >
          {i}
        </PaginationLink>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(<PaginationEllipsis key="ellipsis-end" />);
      }
      buttons.push(
        <PaginationLink
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          isActive={currentPage === totalPages}
        >
          {totalPages}
        </PaginationLink>
      );
    }

    return buttons;
  };

  return (
    <Pagination>
      {currentPage !== 1 && (
        <PaginationPrevious
          onClick={() => onPageChange(currentPage - 1)}
          className="gap-1 pl-2.5"
        >
          Previous
        </PaginationPrevious>
      )}

      <PaginationContent>{renderButtons()}</PaginationContent>
      {currentPage !== totalPages && (
        <PaginationNext
          onClick={() => onPageChange(currentPage + 1)}
          className="gap-1 pr-2.5"
        >
          Next
        </PaginationNext>
      )}
    </Pagination>
  );
};

export default StatePagination;
