import React, { useMemo } from "react";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { DataTable } from "@components/ui/custom/data-table/data-table";
import { columns } from "./table/columns-reported-question";
import { useSearchParams } from "react-router-dom";
import useGetQuestionReported from "../../../hooks/api/get/useGetQuestionReported";
import useDebounce from "../../../hooks/utils/useDebounce";
import { Pagination } from "../../../components/ui/custom";
import { Input } from "../../../components/ui/input";

const QuestionsReported = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(() => {
    return {
      currentPage: Number(searchParams.get("page")) ?? 1,
      search: searchParams.get("search") ?? undefined
    };
  }, [searchParams]);

  const { data: questionData, isLoading } = useGetQuestionReported({
    page: String(params.currentPage) ?? "1",
    perpage: "10",
    search: params.search
  });

  const debouncedSearch = useDebounce((value: string) => {
    searchParams.set("search", value);
    searchParams.delete("page");
    setSearchParams(searchParams);
  }, 400);
  return (
    <>
      <Input
        placeholder="Search..."
        className="max-w-sm my-4"
        value={params.search}
        onChange={e => debouncedSearch(e.target.value)}
      />
      <DataTable columns={columns} data={questionData?.data || []} />
      {questionData?.pagination?.total_pages !== 1 && (
        <div className="mt-4">
          <Pagination
            totalPages={Number(questionData?.pagination?.total_pages)}
            isLoading={isLoading}
          />
        </div>
      )}
    </>
  );
};

export default withAuthGuard(
  QuestionsReported,
  ["admin", "asst_admin"],
  "forums"
);
