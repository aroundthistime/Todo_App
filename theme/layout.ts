import {Dimensions} from 'react-native';

export interface LayoutTheme {
  width: number;
  height: number;
  padding: {[key in string]: number};
  borderRadius: number;
  indicatorSize: number;
  columnGap: number;
}

const layout: LayoutTheme = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  padding: {
    horizontal: 20,
    vertical: 20,
  },
  borderRadius: 10,
  indicatorSize: 16,
  columnGap: 30,
};

export default layout;
