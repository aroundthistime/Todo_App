import React from 'react';
import {Text} from 'react-native';
import DrawerScreenContainer from '../../components/Layout/DrawerScreenContainer/DrawerScreenContainer';

const TodosScreen = ({navigation}) => {
  return (
    <DrawerScreenContainer>
      <Text>Todos</Text>
    </DrawerScreenContainer>
  );
};

export default TodosScreen;
