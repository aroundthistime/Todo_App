import {useState} from 'react';

type ReturnType = {
  startDate: Date;
  endDate: Date;
  year: number;
  month: number;
  changeToPreviousMonth: Function;
  changeToNextMonth: Function;
  arrowIconSize: number;
};

type DateRange = {
  startDate: Date;
  endDate: Date;
};

export const useCalender = (): ReturnType => {
  const getYearAndMonthFromDate = (date: Date) => {
    return {
      year: date.getFullYear(),
      month: date.getMonth(),
    };
  };
  const getStartAndEndDate = (date: Date) => {
    const {year, month} = getYearAndMonthFromDate(date);
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);
    return {
      startDate,
      endDate,
    };
  };
  const [dateRange, setDateRange] = useState<DateRange>(
    getStartAndEndDate(new Date()),
  );

  const getYearAndMonthFromCurrentMonth = () => {
    return getYearAndMonthFromDate(dateRange.startDate);
  };

  const changeMonth = (offset: number) => {
    const {year, month} = getYearAndMonthFromCurrentMonth();
    setDateRange(getStartAndEndDate(new Date(year, month + offset, 1)));
  };

  const changeToPreviousMonth = () => {
    changeMonth(-1);
  };

  const changeToNextMonth = () => {
    changeMonth(1);
  };

  return {
    year: getYearAndMonthFromCurrentMonth().year,
    month: getYearAndMonthFromCurrentMonth().month + 1,
    ...dateRange,
    changeToPreviousMonth,
    changeToNextMonth,
    arrowIconSize: 36,
  };
};
