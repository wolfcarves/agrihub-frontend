import React, { useState } from "react";
import dp from "@icons/center-logo.svg";
import {
  articlesData,
  articleImagesData,
  ArticleSchema
} from "../../../constants/data";
import { formatDate } from "@components/lib/utils";
import { Link } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext
} from "@components/ui/pagination";

const Articles = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const findFirstImage = (articleId: string): string | undefined => {
    const firstImage = articleImagesData.find(
      image => image.articleId === articleId
    );
    return firstImage ? firstImage.image : undefined;
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedArticles = articlesData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(articlesData.length / itemsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="m-8">
      <h3 className="mb-3">Latest Articles</h3>
      <div className="flex flex-wrap gap-8 justify-center my-8">
        {paginatedArticles.map((article: ArticleSchema) => {
          const firstImage = findFirstImage(article.articleId);

          return (
            <Link
              to={`/articles/view/${article.title}/${article.articleId}`}
              key={article.articleId}
            >
              <div className="max-w-sm mb-4">
                <img
                  className="w-full h-[15rem] object-cover object-center rounded-2xl"
                  src={firstImage || ""}
                  alt={article.title}
                />
                <div className="flex justify-center text-sm my-2 items-center gap-2">
                  <img
                    className="h-[1.5rem]"
                    src={dp as unknown as string}
                    alt="Logo"
                  />
                  <p className="font-semibold">Center for Urban Agriculture</p>
                  <p className="font-semibold">|</p>
                  <p className="font-semibold">
                    Updated at {formatDate(article.updatedAt)}
                  </p>
                </div>
                <div className="flex justify-center text-start mb-2">
                  <h3 className="font-semibold line-clamp-2">
                    {article.title}
                  </h3>
                </div>
                <div>
                  <p className="leading-tight font-medium line-clamp-5">
                    {article.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationPrevious onClick={handlePreviousPage} />
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                isActive={index + 1 === currentPage}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationNext onClick={handleNextPage} />
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Articles;
