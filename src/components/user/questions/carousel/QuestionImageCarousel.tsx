import { Card, CardContent } from "@components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@components/ui/carousel";

interface QuestionImageCarouselProps {
  imagesSrc?: string[];
  onImageClick?: (img: string) => void;
}

const QuestionImageCarousel = ({
  imagesSrc,
  onImageClick
}: QuestionImageCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: "start"
      }}
      className="w-full"
    >
      <CarouselContent className="w-full m-0 p-0">
        {imagesSrc?.map((imgSrc, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 sm:basis-1/3 p-1 cursor-pointer"
          >
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-0 m-0 rounded-xl overflow-hidden">
                <img
                  src={imgSrc}
                  alt="attachment_image"
                  className="w-full h-full object-cover"
                  onClick={() => onImageClick && onImageClick(imgSrc)}
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute top-0 bottom-0 w-full my-auto h-max">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default QuestionImageCarousel;
