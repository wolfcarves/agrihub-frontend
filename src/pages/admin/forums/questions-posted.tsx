import React, { useMemo } from "react";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { DataTable } from "@components/ui/custom/data-table/data-table";
import { columns } from "./table/colums-question";
import { Pagination } from "../../../components/ui/custom";
import { Input } from "../../../components/ui/input";
import useDebounce from "../../../hooks/utils/useDebounce";
import useGetQuestionsQuery from "../../../hooks/api/get/useGetQuestionsQuery";
import { useSearchParams } from "react-router-dom";

const QuestionsPosted = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(() => {
    return {
      currentPage: Number(searchParams.get("page")) ?? 1,
      search: searchParams.get("search") ?? undefined
    };
  }, [searchParams]);

  const { data: questionData, isLoading } = useGetQuestionsQuery({
    page: String(params.currentPage) ?? "1",
    perpage: "10",
    search: params.search
  });
  const debouncedSearch = useDebounce((value: string) => {
    searchParams.set("search", value);
    searchParams.delete("page");
    setSearchParams(searchParams);
  }, 400);
  console.log(questionData);
  return (
    <>
      <Input
        placeholder="Search..."
        className="max-w-sm my-4"
        onChange={e => debouncedSearch(e.target.value)}
      />
      <DataTable columns={columns} data={questionData?.questions || []} />
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
  QuestionsPosted,
  ["admin", "asst_admin"],
  "forums"
);
