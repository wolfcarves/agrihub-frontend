import React, { useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import PlantingCalendarSeasonCarousel from "../carousel/PlantingCalendarSeasonCarousel";
import PlantingCalendarSeedlingCarousel from "../carousel/PlantingCalendarSeedlingCarousel";
import useGetCropsQuery from "@hooks/api/get/useGetCropsQuery";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MONTHS } from "@pages/user/planting-calendar/planting-calendar";
import PlantingCalendarHarvestCarousel from "../carousel/PlantingCalendarHarvestCarousel";

interface PlantingCalendarCropListProps {}

const PlantingCalendarCropList = ({}: PlantingCalendarCropListProps) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const params = useMemo(() => {
    return {
      month: Number(searchParams.get("month")) ?? 0
    };
  }, [searchParams]);

  const [selectedMonth, setSelectedMonth] = useState<keyof typeof MONTHS>(
    params?.month
  );

  const handlePrevButton = () => {
    setSelectedMonth(prev => {
      let newValue = Number(prev) - 1;

      if (prev === 0) newValue = MONTHS.length - 1;

      navigate(`/planting-calendar?month=${newValue}`, { replace: true });

      return newValue;
    });
  };

  const handleNextButton = () => {
    setSelectedMonth(prev => {
      let newValue = Number(prev) + 1;

      if (prev === MONTHS.length - 1) newValue = 0;

      navigate(`/planting-calendar?month=${newValue}`, { replace: true });

      return newValue;
    });
  };

  const { data: cropData, isLoading: isCropDataLoading } = useGetCropsQuery();

  return (
    <div className="border w-full h-full rounded-xl px-2 sm:px-10">
      <div className="flex gap-5 justify-center items-center py-2">
        <button
          className="p-2 bg-accent h-max rounded-md"
          onClick={handlePrevButton}
        >
          <FaChevronLeft />
        </button>
        <div className="w-[120px] text-center">
          <h3 className="font-[TimesNewRoman] uppercase">
            {MONTHS[Number(selectedMonth)]}
          </h3>
        </div>
        <button
          className="p-2 bg-accent h-max rounded-md"
          onClick={handleNextButton}
        >
          <FaChevronRight />
        </button>
      </div>

      <PlantingCalendarSeedlingCarousel
        data={cropData}
        selectedMonth={String(selectedMonth)}
        isLoading={isCropDataLoading}
      />

      <PlantingCalendarSeasonCarousel
        data={cropData}
        selectedMonth={String(selectedMonth)}
        isLoading={isCropDataLoading}
      />

      <PlantingCalendarHarvestCarousel
        data={cropData}
        selectedMonth={String(selectedMonth)}
        isLoading={isCropDataLoading}
      />
    </div>
  );
};

export default PlantingCalendarCropList;
