import React from 'react';
import FloatingActionButton from '../../components/Button/FloatActionButton/FloatActionButton';
import DrawerScreenContainer from '../../components/Layout/DrawerScreenContainer/DrawerScreenContainer';
import Todos from '../../components/Todos/Todos';
import {TodosBgImage} from './styles';
import {useTodosScreen} from './useTodosScreen';

const TodosScreen = () => {
  const {drawerScreenContainerStyle, todos} = useTodosScreen();
  return (
    <DrawerScreenContainer
      style={{...drawerScreenContainerStyle, backgroundColor: 'white'}}>
      <TodosBgImage />
      <Todos date={new Date()} todos={todos} />
      <FloatingActionButton onPress={() => 1} />
    </DrawerScreenContainer>
  );
};

export default TodosScreen;
