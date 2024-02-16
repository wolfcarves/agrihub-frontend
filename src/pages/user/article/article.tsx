import thumnail from "@assets/images/thumnail.svg";
import dp from "@icons/center-logo.svg";
import { PiEyeBold } from "react-icons/pi";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  articlesData,
  articleImagesData,
  ArticleSchema,
  articleCreditsData
} from "../../../constants/data";
import { Link } from "react-router-dom";
import { formatDate } from "@components/lib/utils";
import { Button } from "@components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@components/ui/accordion";

const Article = () => {
  const { articleId } = useParams();

  // State to track whether to show all related articles
  const [showAllRelated, setShowAllRelated] = useState(false);

  const currentArticle = articlesData.find(
    article => article.articleId === articleId
  );
  const currentArticleImages = articleImagesData.filter(
    image => image.articleId === articleId
  );
  const getRelatedArticles = (): ArticleSchema[] => {
    return articlesData.filter(article => article.articleId !== articleId);
  };

  const findFirstImage = (articleId: string): string | undefined => {
    const firstImage = articleImagesData.find(
      image => image.articleId === articleId
    );
    return firstImage ? firstImage.image : undefined;
  };

  const relatedArticles = getRelatedArticles();

  // Limit related articles to 3 initially or show all if showAllRelated is true
  const displayedRelatedArticles = showAllRelated
    ? relatedArticles
    : relatedArticles.slice(0, 3);

  const credits = articleCreditsData.filter(
    credit => credit.articleId === articleId
  );
  return (
    <div className="mt-3 mb-8 mx-16 ">
      <div className="flex justify-between items-center">
        <div className="text-[#188B16] mb-3">
          Farming / Agriculture / Urban Farming
        </div>
        <div className="text-[#b9b9b9] mb-3 flex items-center gap-1">
          <PiEyeBold size={18} /> 4.6K
        </div>
      </div>
      <Carousel className="w-full">
        <CarouselContent>
          {currentArticleImages.map((image, index) => (
            <CarouselItem key={index}>
              <section className="my-8">
                <div className="max-w-screen-xl mx-auto md:px-8">
                  <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                      <img
                        src={image.image}
                        className="md:max-w-lg max-h-96 min-h-96 object-cover sm:rounded-lg"
                        alt={image.title}
                      />
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                      <h3 className="text-green-600 font-semibold">
                        Photograph by {image.photographer}
                      </h3>
                      <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        {image.title}
                      </p>
                      <p className="mt-3 text-gray-600">{image.description}</p>
                    </div>
                  </div>
                </div>
              </section>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex justify-center my-5 items-center gap-2">
        <img className="h-[2.3rem]" src={dp as unknown as string} />
        <p className=" font-semibold">Center for Urban Agriculture</p>
        <p className=" font-semibold">|</p>
        <p className=" font-semibold">
          {formatDate(currentArticle?.updatedAt)}
        </p>
      </div>
      <div className="flex justify-center mb-4">
        <h1 className=" font-semibold">
          “{currentArticle?.title || "Title not found"}”
        </h1>
      </div>
      <div>
        <p className=" leading-loose font-medium">
          {currentArticle?.description || "Description not found"}
        </p>
      </div>

      {/* credits */}
      <Accordion type="multiple" className="max-w-3xl mx-auto">
        <AccordionItem value="credits">
          <AccordionTrigger className="decoration-green-400">
            <h3 className="my-4 font-poppins-semibold">Credits</h3>
          </AccordionTrigger>
          {credits.map((credit, index) => (
            <AccordionContent key={index}>
              <p className="text-gray-700 font-semibold sm:text-md">
                {credit.name}
              </p>
              <p className="text-green-600 mb-3">{credit.title}</p>
            </AccordionContent>
          ))}
        </AccordionItem>

        <AccordionItem value="user-permission">
          <AccordionTrigger className=" decoration-green-400">
            <h3 className="my-4 font-poppins-semibold">User Permissions</h3>
          </AccordionTrigger>
          <AccordionContent>
            <span className="text-md">
              For information on user permissions, please read our Terms of
              Service. If you have questions about how to cite anything on our
              website in your project or classroom presentation, please contact
              your teacher. They will best know the preferred format. When you
              reach out to them, you will need the page title, URL, and the date
              you accessed the resource.
            </span>
            <br />
            <div className="mb-2 mt-4">
              <span className="text-lg">
                <b>Media</b>
              </span>
              <br />
              <span className="text-md">
                If a media asset is downloadable, a download button appears in
                the corner of the media viewer. If no button appears, you cannot
                download or save the media.
              </span>
            </div>
            <br />
            <div className="my-2">
              <span className="text-lg">
                <b>Text</b>
              </span>
              <br />
              <span className="text-md">
                Text on this page is printable and can be used according to our{" "}
                <Link
                  to="/terms-condition"
                  className="underline decoration-solid decoration-green-400 hover:decoration-gray-950 underline-offset-[3px]"
                >
                  Terms of Service
                </Link>
                .
              </span>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex justify-center mt-14 mb-8">
        <h2 className="font-bold">Related Articles</h2>
      </div>

      <div className="flex flex-wrap gap-8 justify-center my-8">
        {displayedRelatedArticles.map((article: ArticleSchema) => {
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
      {!showAllRelated && (
        <Button
          variant="outline"
          className="w-full"
          onClick={() => setShowAllRelated(true)}
        >
          See More
        </Button>
      )}
    </div>
  );
};

export default Article;
