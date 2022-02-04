export const extractNumbersFromString = (str: string): number => {
  return parseFloat(str.replace(/[^0-9]/g, ''));
};
