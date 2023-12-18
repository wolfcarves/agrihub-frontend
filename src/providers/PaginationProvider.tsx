import { createContext, ReactNode, RefObject, useContext, useRef } from "react";

export type AuthContextValue = {
  scrollToTop: () => void;
  topRef: RefObject<HTMLDivElement>;
};

export const Pagination = createContext<AuthContextValue | undefined>(
  undefined
);

const PaginationProvider = (props: { children: ReactNode }) => {
  const topRef = useRef<HTMLDivElement>(null);

  const value: AuthContextValue = {
    scrollToTop: () => {
      topRef.current?.scroll(0, 0);
    },
    topRef
  };

  return (
    <Pagination.Provider value={value}>{props.children}</Pagination.Provider>
  );
};

export function UsePagination() {
  return useContext(Pagination);
}

export default PaginationProvider;
