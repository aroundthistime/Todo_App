export interface FontTheme {
  size: {[key in string]: string};
}

const font: FontTheme = {
  size: {
    default: '18px',
    large: '25px',
    small: '16px',
  },
};

export default font;
