import color from './color';

export type ButtonTheme = {
  default: {
    width: number;
    height: number;
  };
  color: Record<string, string>;
  selector: {
    border: (borderColor: string) => string;
  };
  floatingActionButton: {
    size: number;
    iconSize: number;
    positionOffset: number;
    color: string;
  };
};

const button = {
  default: {
    width: 60,
    height: 40,
  },
  color: {
    approveBtnColor: color.skyblue,
    cancelBtnColor: 'red',
    disabledColor: 'gray',
    restoreBtnColor: color.yellow,
  },
  selector: {
    border: (borderColor: string) => {
      return `border-width : 1.2px; border-color : ${borderColor}`;
    },
  },
  floatingActionButton: {
    size: 70,
    iconSize: 30,
    positionOffset: 50,
    color: color.coral,
  },
};

export default button;
