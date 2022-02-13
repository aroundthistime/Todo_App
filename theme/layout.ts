import {Dimensions} from 'react-native';

export interface LayoutTheme {
  width: number;
  height: number;
  padding: {[key in string]: number};
  drawerScreen: {
    padding: {
      vertical: number;
    };
  };
  borderRadius: number;
  indicatorSize: number;
  rowGap: number;
  columnGap: number;
}

const layout: LayoutTheme = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  padding: {
    horizontal: 20,
    vertical: 20,
  },
  drawerScreen: {
    padding: {
      vertical: 90,
    },
  },
  borderRadius: 10,
  indicatorSize: 16,
  rowGap: 20,
  columnGap: 20,
};

export default layout;
