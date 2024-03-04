import { useState, useEffect } from "react";

const useGetWindowSize = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const windowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", windowResize);

    return () => window.removeEventListener("resize", windowResize);
  }, []);

  return {
    width,
    height
  };
};

export default useGetWindowSize;
