export interface FontTheme {
  size: {[key in string]: number};
}

const font: FontTheme = {
  size: {
    default: 16,
    large: 20,
    small: 13,
  },
};

export default font;
