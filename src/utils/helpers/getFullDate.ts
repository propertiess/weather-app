export const getFullDate = (num: number) => {
  const date = new Date(num * 1000);

  return {
    day: date.getDay(),
    date: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear()
  };
};
