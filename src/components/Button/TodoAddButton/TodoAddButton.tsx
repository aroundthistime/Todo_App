import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FloatingActionButton from '../FloatingActionButton/FloatingActionButton';
import {useTodoAddButton} from './useTodoAddButton';

const TodoAddButton = () => {
  const {moveToTodoFormScreen, iconSize} = useTodoAddButton();
  return (
    <FloatingActionButton onPress={moveToTodoFormScreen}>
      <FontAwesome5Icon name="pencil-alt" color="white" size={iconSize} />
    </FloatingActionButton>
  );
};

export default TodoAddButton;
