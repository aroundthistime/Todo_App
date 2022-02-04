import color from './color';

export type BorderTheme = Record<string, string>;

const border: BorderTheme = {
  lightGray: `border-bottom-width : 1px; border-bottom-color : ${color.lightGray}`,
};

export default border;
