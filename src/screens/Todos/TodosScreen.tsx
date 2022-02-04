import React from 'react';
import DrawerScreenContainer from '../../components/Layout/DrawerScreenContainer/DrawerScreenContainer';
import TodosList from '../../components/TodosList/TodosList';
import {TodosBgImage, TodosContainer} from './styles';
import {useTodosScreen} from './useTodosScreen';

const TodosScreen = () => {
  const {drawerScreenContainerStyle, todos} = useTodosScreen();
  return (
    <DrawerScreenContainer style={drawerScreenContainerStyle}>
      <TodosBgImage />
      <TodosContainer>
        <TodosList todos={todos} />
      </TodosContainer>
    </DrawerScreenContainer>
  );
};

export default TodosScreen;
