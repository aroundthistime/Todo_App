import React from 'react';
import {Text} from 'react-native';
import BoxContainer from '../../components/Layout/BoxContainer/BoxContainer';
import DrawerScreenContainer from '../../components/Layout/DrawerScreenContainer/DrawerScreenContainer';

const SettingsScreen = () => {
  return (
    <DrawerScreenContainer>
      <BoxContainer>
        <Text>환경설정</Text>
      </BoxContainer>
    </DrawerScreenContainer>
  );
};

export default SettingsScreen;
