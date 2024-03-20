import { parseISO, formatDistance } from "date-fns";

const useFormatTimeDistance = (time?: string) => {
  const parsedTime = parseISO(time ?? "");
  const now = new Date();

  return <>{formatDistance(parsedTime, now, { addSuffix: true })} </>;
};

export default useFormatTimeDistance;
