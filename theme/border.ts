import color from './color';

export type BorderTheme = Record<string, string>;

const border: BorderTheme = {
  lightGray: `border-width : 1px; border-color : ${color.lightGray}`,
};

export default border;
