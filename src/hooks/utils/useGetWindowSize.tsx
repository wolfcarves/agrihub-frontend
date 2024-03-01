import { useState, useEffect } from "react";

const useGetWindowSize = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const windowResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", windowResize);

    return () => window.removeEventListener("resize", windowResize);
  }, []);

  return {
    width
  };
};

export default useGetWindowSize;
