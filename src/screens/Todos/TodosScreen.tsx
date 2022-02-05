import React from 'react';
import DrawerScreenContainer from '../../components/Layout/DrawerScreenContainer/DrawerScreenContainer';
import Todos from '../../components/Todos/Todos';
import {TodosBgImage} from './styles';
import {useTodosScreen} from './useTodosScreen';

const TodosScreen = () => {
  const {drawerScreenContainerStyle, todos} = useTodosScreen();
  return (
    <DrawerScreenContainer style={drawerScreenContainerStyle}>
      <TodosBgImage />
      <Todos date={new Date()} todos={todos} />
    </DrawerScreenContainer>
  );
};

export default TodosScreen;
