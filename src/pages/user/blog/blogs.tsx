import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Pagination } from "@components/ui/custom";
import useGetBlogsPublishList from "@hooks/api/get/useGetBlogsPublishListQuery";
import DOMPurify from "dompurify";

const Blogs = () => {
  const [searchParams] = useSearchParams();
  const params = String(searchParams.get("page")) ?? "1";

  const { data: blogData } = useGetBlogsPublishList("", params, "10");

  return (
    <div className="py-4 px-8">
      <div className="py-10">
        <h3>Recent Blogs</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2  gap-5">
        {blogData?.data?.map((item, index) => {
          const d = new Date(item?.createdat ?? "");

          const createDate = d.toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
          });

          const htmlContent = DOMPurify.sanitize(item?.content ?? "");

          return (
            <Link to={`/blogs/view/${item.id}`} key={index}>
              <div className="group flex flex-col">
                <div className="max-h-370px max-w-750px">
                  <img
                    src={item?.thumbnail}
                    loading="lazy"
                    alt={item.title}
                    className="w-full rounded-lg max-h-64 min-h-64 object-cover"
                  />
                </div>

                <div className="mt-3">
                  <h5 className="text-gray-600 pt-1 text-sm">{createDate}</h5>
                  <h5 className="font-bold mt-1">
                    {item.category}
                    <span className="text-green-700">{"   >"}</span>
                  </h5>
                  <h1 className="text-gray-800 duration-150 group-hover:text-green-700 font-semibold text-lg">
                    {item?.title}
                  </h1>

                  <p
                    className="text-sm me-8 text-justify line-clamp-5"
                    dangerouslySetInnerHTML={{
                      __html: htmlContent
                    }}
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-auto pt-40">
        <Pagination
          totalPages={blogData?.pagination?.total_pages ?? 1}
          isLoading={false}
        />
      </div>
    </div>
  );
};

export default Blogs;
