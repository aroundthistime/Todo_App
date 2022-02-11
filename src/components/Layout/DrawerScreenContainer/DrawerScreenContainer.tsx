import {ReactNativeStyle} from '@emotion/native';
import React from 'react';
import {TodosBgImage} from '../../../screens/Todos/styled';
import ViewContainer from '../ViewContainer/ViewContainer';
import {DrawerIcon} from './styled';

type Props = {
  children?: React.ReactNode;
  style?: ReactNativeStyle;
};

const DrawerScreenContainer: React.FC<Props> = ({children, style = {}}) => {
  return (
    <ViewContainer style={{...style}}>
      <TodosBgImage />
      {children}
      <DrawerIcon />
    </ViewContainer>
  );
};

export default DrawerScreenContainer;
