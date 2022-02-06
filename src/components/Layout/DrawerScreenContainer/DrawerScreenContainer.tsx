import {ReactNativeStyle} from '@emotion/native';
import React from 'react';
import ViewContainer from '../ViewContainer/ViewContainer';
import {DrawerIcon} from './styles';

type Props = {
  children?: React.ReactNode;
  style?: ReactNativeStyle;
};

const DrawerScreenContainer: React.FC<Props> = ({children, style = {}}) => {
  return (
    <ViewContainer style={{...style}}>
      {children}
      <DrawerIcon />
    </ViewContainer>
  );
};

export default DrawerScreenContainer;
