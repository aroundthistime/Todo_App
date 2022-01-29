import {Dimensions} from 'react-native';

export interface LayoutTheme {
  width: number;
  height: number;
  padding: {[key in string]: string};
}

const layout: LayoutTheme = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  padding: {
    horizontal: '20px',
    viertical: '20px',
  },
};

export default layout;
