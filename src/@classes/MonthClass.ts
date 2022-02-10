export class Month {
  startDate: Date;
  endDate: Date;
  constructor() {
    const {startDate, endDate} = this.getStartAndEndDate(new Date());
    this.startDate = startDate;
    this.endDate = endDate;
  }

  get year(): number {
    return this.startDate.getFullYear();
  }

  get month(): number {
    return this.startDate.getMonth() + 1;
  }

  static getYearAndMonthFromDate(date: Date) {
    return {
      year: date.getFullYear(),
      month: date.getMonth(),
    };
  }

  private getYearAndMonthFromCurrentMonth() {
    return Month.getYearAndMonthFromDate(this.startDate);
  }

  private getStartAndEndDate(date: Date) {
    const {year, month} = Month.getYearAndMonthFromDate(date);
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);
    return {
      startDate,
      endDate,
    };
  }

  private changeMonth(offset: number) {
    const {year, month} = this.getYearAndMonthFromCurrentMonth();
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