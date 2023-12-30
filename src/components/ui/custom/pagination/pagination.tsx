import {
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@components/ui/pagination";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

interface ShadPaginationProps {
  initialPage?: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

const Pagination = ({
  initialPage = 1,
  totalPages,
  onPageChange
}: ShadPaginationProps) => {
  const [current, setCurrent] = useState<number>(1);

  useEffect(() => {
    if (onPageChange) onPageChange(current);
  }, [current, onPageChange]);

  return (
    <>
      <ReactPaginate
        breakLabel={
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        }
        nextLabel={
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        }
        previousLabel={
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
        }
        pageLabelBuilder={page => (
          <PaginationItem>
            <PaginationLink href="#" isActive={current === page}>
              {page}
            </PaginationLink>
          </PaginationItem>
        )}
        className="flex items-center mx-auto w-max"
        pageRangeDisplayed={totalPages < 6 ? 5 : 3}
        pageCount={totalPages}
        initialPage={initialPage}
        onPageChange={selected => setCurrent(selected.selected + 1)}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
