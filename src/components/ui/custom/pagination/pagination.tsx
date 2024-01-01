import {
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@components/ui/pagination";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import { useSearchParams } from "react-router-dom";

interface ShadPaginationProps extends Omit<ReactPaginateProps, "pageCount"> {
  currentPage: number;
  totalPages: number;
}

const Pagination = ({
  currentPage,
  totalPages,
  ...props
}: ShadPaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <ReactPaginate
        breakLabel={
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        }
        previousLabel={
          currentPage !== 1 && (
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
          )
        }
        nextLabel={
          currentPage !== totalPages && (
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          )
        }
        pageLabelBuilder={page => {
          return (
            <PaginationItem>
              <PaginationLink
                href="#"
                isActive={
                  page === currentPage
                    ? true
                    : !currentPage
                    ? page === 1
                    : false
                }
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        }}
        className="flex items-center mx-auto w-max"
        pageCount={totalPages}
        onPageChange={page => {
          const pageSelected = page.selected + 1;

          if (currentPage !== pageSelected) {
            setSearchParams({
              page: String(pageSelected)
            });
          }

          window.scrollTo(0, 0);
        }}
        {...props}
      />
    </>
  );
};

export default Pagination;
