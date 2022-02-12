import React from 'react';
import TodoAddButton from '../../components/Button/TodoAddButton/TodoAddButton';
import DrawerScreenContainer from '../../components/Layout/DrawerScreenContainer/DrawerScreenContainer';
import Todos from '../../components/Todos/Todos';
import {useTodosScreen} from './useTodosScreen';

const TodosScreen = () => {
  const {todos} = useTodosScreen();
  return (
    <DrawerScreenContainer>
      <Todos date={new Date()} todos={todos} />
      <TodoAddButton />
    </DrawerScreenContainer>
  );
};

export default TodosScreen;
