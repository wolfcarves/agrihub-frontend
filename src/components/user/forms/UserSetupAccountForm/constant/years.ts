import memoize from "memoize-one";

export const generateAllowedYears = () => {
  const leastYear = 1960;
  const mostYear = 2010;

  const years: Array<{ value: number; label: number }> = [];

  for (let i = leastYear; i <= mostYear; i++) {
    years.push({
      value: i,
      label: i
    });
  }

  return years;
};

export const getAllowedYears = memoize(generateAllowedYears);
