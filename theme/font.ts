export interface FontTheme {
  size: {[key in string]: number};
}

const font: FontTheme = {
  size: {
    default: 18,
    large: 25,
    small: 16,
  },
};

export default font;
