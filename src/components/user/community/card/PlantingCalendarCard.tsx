import { Drawer, DrawerContent, DrawerTrigger } from "@components/ui/drawer";
import { CropData } from "@api/openapi";
import { MONTHS } from "@pages/user/calendar/calendar";

interface PlantingCalendarCardProps extends CropData {}

const GridItem = ({
  title,
  value
}: {
  title?: string;
  value?: string | boolean;
}) => {
  return (
    <div className="p-2">
      <h3 className="font-poppins-semibold text-md sm:text-xl">{title} :</h3>
      <h4 className="mt-3 text-base sm:text-lg">{value}</h4>
    </div>
  );
};

const PlantingCalendarCard = ({
  name,
  description,
  image,
  planting_season,
  seedling_season,
  harvest_season,
  growth_span,
  isyield
}: PlantingCalendarCardProps) => {
  return (
    <div className="flex shadow-sm bg-white h-40 md:h-52 w-full rounded-2xl overflow-hidden">
      <div className="h-full w-[50%] md:min-w-[13rem]">
        <img src={image} className="object-cover h-full w-full" />
      </div>

      <div className="flex flex-col w-full items-start px-4 py-3 md:px-8 md:py-6">
        <div className="text-start">
          <h3 className="font-poppins-bold opacity-90 text-lg md:text-xl">
            {name}
          </h3>

          <p className="font-poppins-medium mt-3 opacity-80 text-base md:text-md line-clamp-2">
            {description}
          </p>
        </div>

        <Drawer shouldScaleBackground={true}>
          <DrawerTrigger asChild>
            <button className="bg-[#27272A] text-white mt-auto px-3 py-1 md:px-3 md:py-2 rounded-xl hover:opacity-80">
              See Details
            </button>
          </DrawerTrigger>
          <DrawerContent vaul-drawer-wrapper>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-10 h-[40rem] p-3 md:p-10 overflow-auto scroll-smooth">
              <GridItem title="Crop name" value={name} />
              <GridItem title="Details" value={description} />
              <GridItem
                title="Planting Season"
                value={MONTHS[Number(planting_season) ?? 0]}
              />
              <GridItem
                title="Seedling Season"
                value={MONTHS[Number(seedling_season) ?? 0]}
              />
              <GridItem
                title="Harvest Season"
                value={MONTHS[Number(harvest_season) ?? 0]}
              />
              <GridItem
                title="Growth Span"
                value={MONTHS[Number(growth_span) ?? 0]}
              />
              <GridItem title="isYield" value={isyield ?? ""} />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default PlantingCalendarCard;

/*
 <button className="relative flex flex-col h-[13rem] w-full max-w-[40rem] rounded-sm overflow-hidden p-3">
      <div className="absolute start-0 top-0 -z-10 h-full w-full bg-gradient-to-r from-[#e6fcec] via-[#e6fcec] to-100%" />

      <h5>{title}</h5>
      <p className="text-start mt-5 line-clamp-6 pe-20 lg:pe-32">
        {description}
      </p>

      <img
        src={imgSrc}
        className="absolute top-0 end-0 w-[15rem] h-full -z-20"
      />
    </button>
*/
