import React from 'react';
import styled from '@emotion/native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useTheme} from '@emotion/react';

const DrawerIconContainer = styled.TouchableOpacity`
  position: absolute;
  top: ${props => props.theme.layout.padding.vertical};
  right: ${props => props.theme.layout.padding.horizontal};
`;

export const DrawerIcon = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <DrawerIconContainer onPress={toggleDrawer}>
      <Icon name="bars" size={theme.icon.size} />
    </DrawerIconContainer>
  );
};
