import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const GET_WEATHER_FORCAST_KEY = () => "GET_WEATHER_FORCAST_KEY";

export default function useGetWeatherForcast() {
  return useQuery({
    queryKey: [GET_WEATHER_FORCAST_KEY()],
    queryFn: async () => {
      const data = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=14.6402&lon=121.0005&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );

      return data.data;
    }
  });
}
