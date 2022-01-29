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
