import {
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@components/ui/pagination";
import { useMemo } from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import { useSearchParams } from "react-router-dom";

interface ShadPaginationProps extends Omit<ReactPaginateProps, "pageCount"> {
  totalPages: number;
  isLoading?: boolean;
}

const Pagination = ({
  totalPages,
  isLoading,
  ...props
}: ShadPaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(
    () => ({
      page: Number(searchParams.get("page")) ?? 1
    }),
    [searchParams]
  );

  if (isLoading) {
    return <></>;
  }

  return (
    <>
      <ReactPaginate
        breakLabel={
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        }
        previousLabel={
          params.page !== 1 && (
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
          )
        }
        nextLabel={
          params.page !== totalPages && (
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
                  page === params.page
                    ? true
                    : !params.page
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
        forcePage={params.page - 1}
        onPageChange={({ selected }) => {
          const selectedPage = String(selected + 1);

          searchParams.set("page", selectedPage);
          setSearchParams(searchParams);

          window.scrollTo(0, 0);
        }}
        {...props}
      />
    </>
  );
};

export default Pagination;
