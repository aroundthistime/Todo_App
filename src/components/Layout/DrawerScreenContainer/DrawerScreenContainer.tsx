import React from 'react';
import ViewContainer from '../ViewContainer/ViewContainer';
import {DrawerIcon} from './styles';

const DrawerScreenContainer: React.FC = ({children}) => {
  return (
    <ViewContainer>
      {children}
      <DrawerIcon />
    </ViewContainer>
  );
};

export default DrawerScreenContainer;
