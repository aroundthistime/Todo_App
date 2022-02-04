import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ViewContainer from '../ViewContainer/ViewContainer';
import Icon from 'react-native-vector-icons/FontAwesome5';

const DrawerScreenContainer: React.FC = ({children}) => {
  const navigation = useNavigation();
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <ViewContainer>
      {children}
      <TouchableOpacity onPress={toggleDrawer}>
        <Icon name="bars" size={30} />
      </TouchableOpacity>
    </ViewContainer>
  );
};

export default DrawerScreenContainer;
