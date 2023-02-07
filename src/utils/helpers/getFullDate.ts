export const getFullDate = (num: number) => {
  const date = new Date(num * 1000);

  return {
    day: date.getUTCDay(),
    date: date.getUTCDate(),
    month: date.getUTCMonth(),
    year: date.getUTCFullYear()
  };
};
