export const extractFileExtension = (fileName: string): string => {
  const matchResult = fileName.match(/\.[0-9a-z]+$/i);
  return matchResult ? matchResult[0] : '';
};
