import React from 'react';
import TodoAddButton from '../../components/Button/TodoAddButton/TodoAddButton';
import DrawerScreenContainer from '../../components/Layout/DrawerScreenContainer/DrawerScreenContainer';
import Todos from '../../components/Todos/Todos';
import {useTodosScreen} from './useTodosScreen';

const TodosScreen = () => {
  const {drawerScreenContainerStyle, todos} = useTodosScreen();
  return (
    <DrawerScreenContainer
      style={{
        ...drawerScreenContainerStyle,
        backgroundColor: 'white',
        position: 'relative',
      }}>
      <Todos date={new Date()} todos={todos} />
      <TodoAddButton />
    </DrawerScreenContainer>
  );
};

export default TodosScreen;
