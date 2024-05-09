const useYearList = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2022 },
    (_, index) => 2023 + index
  );

  return years;
};

export default useYearList;
