import {ReactNativeStyle} from '@emotion/native';
import React from 'react';
import {ImageBackground} from 'react-native';
import {useSelector} from 'react-redux';
import {bgImageSourceSelector} from '../../../modules/bgImage';

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  style?: ReactNativeStyle;
};

const BgImageContainer = ({children, style = {}}: Props) => {
  const bgImageSource = useSelector(bgImageSourceSelector);
  return (
    <ImageBackground
      style={{
        flex: 1,
        justifyContent: 'center',
        ...style,
      }}
      source={bgImageSource}
      resizeMode="cover">
      {children}
    </ImageBackground>
  );
};

export default BgImageContainer;
