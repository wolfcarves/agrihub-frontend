import SkeletonCropCard from "@components/user/calendar/skeleton/skeleton-crop-card";
import PlantingCalendarCard from "@components/user/community/card/PlantingCalendarCard";
import useGetCropsQuery from "@hooks/api/get/useGetCropsQuery";

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const Calendar = () => {
  const { data: cropData, isLoading: isCropDataLoading } = useGetCropsQuery();

  const crops = cropData?.map(data => (
    <PlantingCalendarCard
      key={data.id}
      name={data?.name}
      description={data?.description}
      image={data?.image}
      planting_season={data?.planting_season}
      growth_span={data?.growth_span}
      harvest_season={data?.harvest_season}
      seedling_season={data?.seedling_season}
      isyield={data?.isyield}
    />
  ));

  return (
    <div className="w-full px-3 md:px-10" data-vaul-drawer-wrapper>
      <div className="flex justify-between items-center mt-14">
        <h2 className="mx-auto">All Crops</h2>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-5 py-10 w-full">
        {isCropDataLoading ? (
          <SkeletonCropCard count={12} />
        ) : crops?.length ? (
          crops
        ) : (
          <>No Results</>
        )}
      </div>
    </div>
  );
};

export default Calendar;
