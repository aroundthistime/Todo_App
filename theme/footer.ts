export type FooterTheme = {
  height: number;
  backgroundColor: string;
  padding: {
    horizontal: number;
    vertical: number;
  };
  gapBetweenButtons: number;
  buttonIconSize: number;
};

const footer = {
  height: 80,
  backgroundColor: '#F7F7F7',
  padding: {
    horizontal: 20,
    vertical: 10,
  },
  gapBetweenButtons: 10,
  buttonIconSize: 22,
};

export default footer;
