import React from 'react';
import styled from '@emotion/native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useTheme} from '@emotion/react';
import {ImageBackground} from 'react-native';
import drawerScreenBackgroundImage from '../../../../assets/images/drawer-screen-background.png';

const DrawerIconContainer = styled.TouchableOpacity`
  position: absolute;
  top: ${props => props.theme.layout.padding.vertical.toString()}px;
  right: ${props => props.theme.layout.padding.horizontal.toString()}px;
`;

export const DrawerIcon = React.memo(() => {
  const theme = useTheme();
  const navigation = useNavigation();
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <DrawerIconContainer onPress={toggleDrawer}>
      <Icon name="bars" size={theme.icon.size.default} />
    </DrawerIconContainer>
  );
});

export const DrawerScreenBgImage = ({children}) => (
  <ImageBackground
    style={{
      flex: 1,
      justifyContent: 'center',
    }}
    source={drawerScreenBackgroundImage}
    resizeMode="cover">
    {children}
  </ImageBackground>
);
