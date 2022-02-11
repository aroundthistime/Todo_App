import color from './color';

export type CalenderTheme = {
  cell: {
    padding: number;
    selectedCellColor: string;
  };
};

const calender: CalenderTheme = {
  cell: {
    padding: 5,
    selectedCellColor: color.lightPink,
  },
};

export default calender;
