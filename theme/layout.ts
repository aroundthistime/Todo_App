import {Dimensions} from 'react-native';

export interface LayoutTheme {
  width: number;
  height: number;
  padding: {[key in string]: string};
  borderRadius: string;
}

const layout: LayoutTheme = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  padding: {
    horizontal: '20px',
    vertical: '20px',
  },
  borderRadius: '10px',
};

export default layout;
