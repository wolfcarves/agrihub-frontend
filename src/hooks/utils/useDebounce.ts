import { useEffect, useRef } from "react";

const useDebounce = <T extends (...args: any[]) => void>(
  callback: T,
  delay: number
) => {
  const timeoutId = useRef<number | null>(null);

  const debouncedCallback = (...args: Parameters<T>) => {
    if (timeoutId.current !== null) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = window.setTimeout(() => {
      callback(...args);
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (timeoutId.current !== null) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  return debouncedCallback as (...args: Parameters<T>) => void;
};

export default useDebounce;
