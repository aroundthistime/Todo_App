import {ReactNativeStyle} from '@emotion/native';
import {useTheme} from '@emotion/react';

type ReturnType = {
  containerStyle: ReactNativeStyle;
};

export const useQuoteScreen = (): ReturnType => {
  const {
    layout: {
      padding: {horizontal: paddingHorizontal, vertical: paddingVertical},
    },
  } = useTheme();
  return {
    containerStyle: {
      paddingHorizontal,
      paddingVertical,
      alignItems: 'center',
    },
  };
};
