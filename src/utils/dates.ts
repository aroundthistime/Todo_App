const DAY = {
  0: '월',
  1: '화',
  2: '수',
  3: '목',
  4: '금',
  5: '토',
  6: '일',
};

export const datesAreOnSameDay = (date1: Date, date2: Date): boolean =>
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDate() === date2.getDate();

export const isToday = (date: Date): boolean =>
  datesAreOnSameDay(date, new Date());

export const add24HoursToDate = (date: Date): Date =>
  new Date(date.getTime() + 60 * 60 * 24 * 1000);

export const add24HoursFromNow = (): Date => add24HoursToDate(new Date());

export const getDateTime24HoursFromNow = (): number =>
  add24HoursFromNow().getTime();

export const isBeforeCurrent = (date: Date): boolean =>
  isBefore(date, new Date());

export const isBefore = (date1: Date, date2: Date): boolean =>
  date1.getTime() < date2.getTime();

export const getFullDateStr = (dateObj: Date): string => {
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const date = dateObj.getDate();
  const day = DAY[dateObj.getDay()];
  return `${year}년 ${month}월 ${date}일 (${day})`;
};
