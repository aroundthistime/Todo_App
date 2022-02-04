import React from 'react';
import {StyleObject} from '../../../@types/StyleObject';
import ViewContainer from '../ViewContainer/ViewContainer';
import {DrawerIcon} from './styles';

type Props = {
  children?: React.ReactNode;
  style?: StyleObject;
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
