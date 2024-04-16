import { CropData } from "@api/openapi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@components/ui/carousel";
import LoadingSpinner from "@icons/LoadingSpinner";
import { useNavigate } from "react-router-dom";

interface PlantingCalendarSeasonCarouselProps {
  data?: CropData[];
  selectedMonth: string;
  isLoading: boolean;
}

const PlantingCalendarSeasonCarousel = ({
  data,
  selectedMonth,
  isLoading
}: PlantingCalendarSeasonCarouselProps) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex gap-7 items-center">
        <div className="h-0.5 w-full bg-foreground" />
        <h5 className="font-poppins-bold">
          planting <br /> season
        </h5>
        <div className="h-0.5 w-full bg-foreground" />
      </div>

      <div>
        <Carousel
          opts={{
            align: "start",
            dragFree: true
          }}
          className="w-full"
        >
          <CarouselContent className="w-full m-0 p-0 h-[165px]">
            {isLoading ? (
              <LoadingSpinner className="text-primary mx-auto mt-10" />
            ) : (
              <>
                {data?.map(({ name, image, p_season }) => {
                  if (p_season?.includes(selectedMonth)) {
                    return (
                      <CarouselItem
                        key={`${name}${image}`}
                        className={`flex flex-col items-center basis-1/4 p-1 cursor-pointer`}
                        onClick={() => navigate(`${name}`)}
                      >
                        <div className="flex flex-col aspect-square items-center justify-center overflow-hidden rounded-xl max-w-[7rem]">
                          <img
                            src={image}
                            className="object-cover w-full h-full"
                          />
                        </div>

                        <h4 className="font-[TimesNewRoman] font-semibold">
                          {name}
                        </h4>
                      </CarouselItem>
                    );
                  }
                })}
              </>
            )}
          </CarouselContent>

          <div className="absolute top-0 bottom-0 w-full my-auto h-max px-10">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PlantingCalendarSeasonCarousel;
