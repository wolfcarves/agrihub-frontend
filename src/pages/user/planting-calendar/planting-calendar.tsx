import { useEffect } from "react";
import useGetClientDetails from "@hooks/api/get/useGetClientDetails";
import PlantingCalendarTitle from "@components/user/calendar/title/PlantingCalendarTitle";
import PlantingCalendarOutletContainer from "@components/user/calendar/container/PlantingCalendarOutletContainer";
import PlantingCalendarCardTitle from "@components/user/calendar/title/PlantingCalendarCardTitle";
import PlantingCalendarCropList from "@components/user/calendar/list/PlantingCalendarCropList";
import PlantingCalendarCardContainer from "@components/user/calendar/container/PlantingCalendarCardContainer";

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
] as const;

const PlantingCalendar = () => {
  const { data: cmsClientDetails } = useGetClientDetails();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PlantingCalendarOutletContainer>
      <PlantingCalendarTitle />
      <PlantingCalendarCardContainer>
        <PlantingCalendarCardTitle logo={cmsClientDetails?.logo} />
        <PlantingCalendarCropList />
      </PlantingCalendarCardContainer>
    </PlantingCalendarOutletContainer>
  );
};

export default PlantingCalendar;
/*

*/
