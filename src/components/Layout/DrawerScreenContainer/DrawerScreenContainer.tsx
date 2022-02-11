import {ReactNativeStyle} from '@emotion/native';
import React from 'react';
import ViewContainer from '../ViewContainer/ViewContainer';
import {DrawerIcon, DrawerScreenBgImage} from './styled';

type Props = {
  children?: React.ReactNode;
  style?: ReactNativeStyle;
};

const DrawerScreenContainer: React.FC<Props> = ({children, style = {}}) => {
  return (
    <DrawerScreenBgImage>
      <ViewContainer style={{...style, backgroundColor: 'transparent'}}>
        {children}
        <DrawerIcon />
      </ViewContainer>
    </DrawerScreenBgImage>
  );
};

export default DrawerScreenContainer;
