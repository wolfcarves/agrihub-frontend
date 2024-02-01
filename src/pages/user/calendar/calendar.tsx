import PlantingCalendarCard from "@components/user/community/card/PlantingCalendarCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup
} from "@components/ui/select";
import useGetCrops from "@hooks/api/get/useGetCrops";
import LoadingSpinner from "@icons/LoadingSpinner";
import { useState } from "react";

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
  const [monthIndex, setMonthIndex] = useState<number>(0);
  const { data: cropData, isLoading: isCropDataLoading } = useGetCrops();

  const crops = cropData
    ?.filter(c => Number(c.planting_season) === monthIndex)
    .map(data => (
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
        <h2 className="text-lg md:text-xl font-poppins-medium">
          Planting Calendar
        </h2>

        <div className="w-32">
          <Select
            defaultValue={MONTHS[0]}
            onValueChange={value => {
              setMonthIndex(MONTHS.indexOf(value));
            }}
          >
            <div className="rounded-lg h-11">
              <SelectTrigger>
                <SelectValue placeholder="" />
              </SelectTrigger>
            </div>
            <SelectContent>
              <SelectGroup>
                {MONTHS.map(m => (
                  <SelectItem key={m} value={m} className="cursor-pointer">
                    {m}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-10 w-full">
        {isCropDataLoading && <LoadingSpinner className="mx-auto mt-2" />}
        {crops?.length ? crops : <>No Results</>}
      </div>
    </div>
  );
};

export default Calendar;
