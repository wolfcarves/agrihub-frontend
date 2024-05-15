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

interface PlantingCalendarHarvestCarouselProps {
  data?: CropData[];
  selectedMonth: string;
  isLoading: boolean;
}

const PlantingCalendarHarvestCarousel = ({
  data,
  selectedMonth,
  isLoading
}: PlantingCalendarHarvestCarouselProps) => {
  const navigate = useNavigate();

  console.log(data);

  return (
    <div>
      <div className="flex gap-7 items-center">
        <div className="h-0.5 w-full bg-foreground" />
        <h5 className="font-poppins-bold">
          harvest <br /> season
        </h5>
        <div className="h-0.5 w-full bg-foreground" />
      </div>

      <div>
        <Carousel
          opts={{
            align: "start",
            dragFree: true
          }}
          className="relative w-full"
        >
          <CarouselContent className="w-full m-0 p-0 h-[170px]">
            {isLoading ? (
              <LoadingSpinner className="text-primary mx-auto mt-10" />
            ) : (
              <>
                {data?.map(({ name, image, harvest_season }) => {
                  if (harvest_season === String(selectedMonth)) {
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

                        <h4 className="text-[14px] sm:text-[20px] text-center font-[TimesNewRoman] font-semibold">
                          {name}
                        </h4>
                      </CarouselItem>
                    );
                  }
                })}
              </>
            )}
          </CarouselContent>

          <div className="absolute start-0 end-0 bottom-5 mx-auto w-max h-max px-5 sm:px-10">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PlantingCalendarHarvestCarousel;
