import React, { useMemo } from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { Input } from "@components/ui/input";
import { DataTable } from "@components/ui/custom/data-table/data-table";
import { columns } from "./columns-feedback";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import useGetCmsUserFeedbackList from "../../../../hooks/api/get/useGetCmsUserFeedbackList";
import useDebounce from "../../../../hooks/utils/useDebounce";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../../../../components/ui/custom";

const breadcrumbItems = [
  {
    title: "Feedbacks and Suggestion",
    link: "/admin/website/user-feedback"
  }
];
const FeedbackAdmin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(() => {
    return {
      currentPage: Number(searchParams.get("page")) ?? 1,
      search: searchParams.get("search") ?? undefined
    };
  }, [searchParams]);
  const { data: feedbackData, isLoading } = useGetCmsUserFeedbackList(
    params.search,
    String(params.currentPage),
    "10"
  );
  const debouncedSearch = useDebounce((value: string) => {
    searchParams.set("search", value);
    searchParams.delete("page");
    setSearchParams(searchParams);
  }, 400);
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">
          User Feedback and Suggestion
        </h2>
      </div>
      <p className="text-sm text-muted-foreground w-10/12">
        Facilitate open communication and collaboration with users by providing
        a platform for feedback and suggestions. Encourage users to share their
        thoughts, ideas, and concerns to help improve the platform. Actively
        listen to user feedback and incorporate valuable suggestions into
        ongoing enhancements to enhance user experience and satisfaction.
      </p>
      <hr className="my-4" />
      <div className="flex items-center">
        <Input
          placeholder="Search..."
          className="max-w-sm my-4"
          onChange={e => debouncedSearch(e.target.value)}
        />
      </div>
      <DataTable columns={columns} data={feedbackData?.data || []} />
      {feedbackData?.pagination?.total_pages !== 1 && (
        <div className="mt-4">
          <Pagination
            totalPages={Number(feedbackData?.pagination?.total_pages)}
            isLoading={isLoading}
          />
        </div>
      )}
    </AdminOutletContainer>
  );
};

export default withAuthGuard(
  FeedbackAdmin,
  ["admin", "asst_admin"],
  "user_feedback"
);
