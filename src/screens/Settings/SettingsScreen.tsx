import React from 'react';
import {Text} from 'react-native';
import BoxContainer from '../../components/Layout/BoxContainer/BoxContainer';
import DrawerScreenContainer from '../../components/Layout/DrawerScreenContainer/DrawerScreenContainer';
import Tabs from '../../components/Tabs/Tabs';
import {useSettingsScreen} from './useSettingsScreen';

const SettingsScreen = () => {
  const {navigation, appVersion} = useSettingsScreen();
  return (
    <DrawerScreenContainer>
      <BoxContainer style={{flex: 1}}>
        <BoxContainer.Header>
          <BoxContainer.Title>설정</BoxContainer.Title>
        </BoxContainer.Header>
        <Tabs>
          <Tabs.Item onPress={() => navigation.navigate('BgImageSelection')}>
            <Tabs.ItemContent>배경화면 설정</Tabs.ItemContent>
            <Tabs.RightSection>
              <Tabs.RightArrowIcon />
            </Tabs.RightSection>
          </Tabs.Item>
          <Tabs.Item>
            <Tabs.ItemContent>버전정보</Tabs.ItemContent>
            <Tabs.RightSection>
              <Tabs.Text>{appVersion}</Tabs.Text>
            </Tabs.RightSection>
          </Tabs.Item>
        </Tabs>
      </BoxContainer>
    </DrawerScreenContainer>
  );
};

export default React.memo(SettingsScreen);
