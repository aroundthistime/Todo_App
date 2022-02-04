import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DrawerScreenContainer from '../../components/Layout/DrawerScreenContainer/DrawerScreenContainer';
import ViewContainer from '../../components/Layout/ViewContainer/ViewContainer';

const TodosScreen = ({navigation}) => {
  return (
    <DrawerScreenContainer>
      <Text>Todos</Text>
    </DrawerScreenContainer>
    // <ViewContainer>
    //   <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
    //     <Text>안뇽</Text>
    //   </TouchableOpacity>
    //   <Text>TOdos</Text>
    // </ViewContainer>
  );
};

export default TodosScreen;
