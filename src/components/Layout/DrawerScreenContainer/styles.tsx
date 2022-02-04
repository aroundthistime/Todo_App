import React from 'react';
import styled from '@emotion/native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const DrawerIconContainer = styled.TouchableOpacity`
  position: absolute;
  top: ${props => props.theme.layout.padding.vertical};
  right: ${props => props.theme.layout.padding.horizontal};
`;

export const DrawerIcon = () => {
  const navigation = useNavigation();
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <DrawerIconContainer onPress={toggleDrawer}>
      <Icon name="bars" size={30} />
    </DrawerIconContainer>
  );
};
