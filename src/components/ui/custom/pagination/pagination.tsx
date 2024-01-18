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

const PaginationPreviousLabel = ({ page }: { page: number }) => {
  return (
    page !== 1 &&
    !!page && (
      <PaginationItem>
        <PaginationPrevious />
      </PaginationItem>
    )
  );
};

const PaginationNextLabel = ({
  page,
  totalPages
}: {
  page: number;
  totalPages: number;
}) => {
  return (
    page !== totalPages && (
      <PaginationItem>
        <PaginationNext />
      </PaginationItem>
    )
  );
};

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

  const isPageValid = totalPages < params.page;

  if (isLoading || isPageValid || !totalPages) {
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
        previousLabel={<PaginationPreviousLabel page={params.page} />}
        nextLabel={
          <>
            {totalPages !== 1 && (
              <PaginationNextLabel page={params.page} totalPages={totalPages} />
            )}
          </>
        }
        pageLabelBuilder={page => {
          return (
            <PaginationItem>
              <PaginationLink
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
        className="flex items-center mx-auto w-max list-none"
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
