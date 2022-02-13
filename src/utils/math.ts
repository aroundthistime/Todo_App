export const extractNumbersFromString = (str: string): number => {
  return parseFloat(str.replace(/[^0-9]/g, ''));
};

export const range = (start: number, end: number) => {
  return Array.apply(0, Array(end - 1)).map((element, index) => index + start);
};
