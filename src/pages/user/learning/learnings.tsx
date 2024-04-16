import React, { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { convertToEmbedLink, formatDate } from "@components/lib/utils";
import useGetLearningPublishedList from "../../../hooks/api/get/useGetLearningPublishedList";
import parse from "html-react-parser";
import { Pagination } from "../../../components/ui/custom";
import SkeletonCard from "@components/ui/custom/skeleton/skeleton-card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "../../../components/ui/select";
import extractYouTubeVideoId from "./util/extractYtUrl";
import { FaPlay } from "react-icons/fa";
import LoadingSpinner from "@icons/LoadingSpinner";

const Learnings = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(() => {
    return {
      currentPage: Number(searchParams.get("page")) ?? 1,
      sortBy: searchParams.get("sortBy") as
        | "Tagalog"
        | "English"
        | "Tagalog and English"
        | "All",
      videoId: searchParams.get("videoId"),
      preview: searchParams.get("preview")
    };
  }, [searchParams]);

  const { data: learningsData, isLoading } = useGetLearningPublishedList({
    perpage: "9",
    page: String(params.currentPage) ?? "1",
    filter: params.sortBy === "All" ? undefined : params.sortBy
  });

  const handleFilterChange = (value: string) => {
    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
  };

  const totalPages =
    learningsData?.pagination?.total_pages ?? params.currentPage + 1;

  const [isPreviewing, setIsPreviewing] = useState<boolean>(false);

  return (
    <>
      {/* Video Preview */}
      {isPreviewing && (
        <div
          className="fixed inset-0 h-full w-full flex justify-center items-center z-50 bg-black/70"
          onClick={() => setIsPreviewing(false)}
        >
          <div
            className={`relative w-[90%] aspect-video xl:w-1/2 xl:h-1/2 object-contain animate-appear bg-black`}
          >
            <div className="absolute inset-0 m-auto h-max w-max -z-10">
              <LoadingSpinner className="text-primary" />
            </div>

            <iframe
              className={`w-full h-full object-contain aspect-auto`}
              title={params.videoId ?? ""}
              src={convertToEmbedLink(params.preview || "")}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          {/*  */}
        </div>
      )}

      <section className="my-12 mx-auto px-4 max-w-screen-xl py-8">
        <div className="flex justify-between">
          <div className="text-left">
            <h1 className="text-3xl text-gray-800 font-semibold">
              Learning Materials
            </h1>
            <p className="mt-3 text-gray-500">
              Tuklasin ang masaganang kaalaman ukol sa pagpapaunlad ng
              kasiglahan ng iyong farm.
            </p>
          </div>
          <Select onValueChange={handleFilterChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="Tagalog">Tagalog</SelectItem>
                <SelectItem value="Tagalog and English">
                  Tagalog and English
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {isLoading && (
            <div>
              <SkeletonCard count={10} className="w-full md:w-1/3" />
            </div>
          )}
          {learningsData?.data?.map((items, key) => (
            <div className="max-w-sm">
              <Link to={`/learning-materials/view/${items.id}`}>
                <article
                  className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
                  key={key}
                >
                  {items.thumbnail.type === "image" ? (
                    <img
                      src={`https://s3.ap-southeast-1.amazonaws.com/agrihub-bucket/${items.thumbnail.resource}`}
                      alt={items.thumbnail.id}
                      className="h-48 w-full object-cover"
                    />
                  ) : items.thumbnail.type === "video" ? (
                    <div className="relative w-full aspect-video rounded-t-md border">
                      <img
                        src={`https://i.ytimg.com/vi/${extractYouTubeVideoId(
                          items.thumbnail.resource
                        )}/hqdefault.jpg`}
                        className="w-full h-full object-cover rounded-t-md"
                      />

                      <button
                        className="absolute inset-0"
                        onClick={e => {
                          e.preventDefault();
                          searchParams.set("videoId", items.thumbnail.id);
                          searchParams.set("preview", items.thumbnail.resource);
                          setSearchParams(searchParams);
                          setIsPreviewing(true);
                        }}
                      >
                        <div className="m-auto rounded-full w-max h-max border p-5">
                          <FaPlay
                            className="text-background translate-x-1"
                            size={36}
                          />
                        </div>
                      </button>
                      {/* <iframe
                      className="w-full h-full rounded-t-md"
                      src={convertToEmbedLink(items.thumbnail.resource || "")}
                      title={items.thumbnail.id}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe> */}
                    </div>
                  ) : null}

                  <div className="bg-white p-4 sm:p-6">
                    <time className="block text-xs text-gray-500">
                      {formatDate(items.createdat)} | {items.language}
                    </time>

                    <h3 className="font-poppins-semibold mt-0.5 text-lg text-gray-900 line-clamp-2">
                      {items.title}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 ">
                      {parse(items.content || "")}
                    </p>
                    <div className="my-4 item">
                      <p className="text-gray-700 mb-2 flex flex-wrap">
                        {items.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="text-base text-primary rounded-md w-auto border border-[#BBE3AD] bg-secondary px-2 mr-2 mb-2 py-1"
                          >
                            {tag.tag}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Pagination totalPages={totalPages} isLoading={isLoading} />
        </div>
      </section>
    </>
  );
};

export default Learnings;
