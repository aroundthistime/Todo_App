export class Calender {
  now: Date;
  startDate: Date;
  endDate: Date;
  constructor() {
    const now = new Date();
    this.now = now;
    const {startDate, endDate} = this.getStartAndEndDate(now);
    this.startDate = startDate;
    this.endDate = endDate;
  }

  static getYearAndMonthFromDate(date: Date) {
    return {
      year: date.getFullYear(),
      month: date.getMonth(),
    };
  }

  private getYearAndMonthFromCurrentCalender() {
    return Calender.getYearAndMonthFromDate(this.startDate);
  }

  private getStartAndEndDate(date: Date) {
    const {year, month} = Calender.getYearAndMonthFromDate(date);
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);
    return {
      startDate,
      endDate,
    };
  }

  private changeMonth(offset: number) {
    const {year, month} = this.getYearAndMonthFromCurrentCalender();
    const {startDate, endDate} = this.getStartAndEndDate(
      new Date(year, month + offset, 1),
    );
    this.startDate = startDate;
    this.endDate = endDate;
  }

  changeToPreviousMonth() {
    this.changeMonth(-1);
  }

  changeToNextMonth() {
    this.changeMonth(1);
  }
}
