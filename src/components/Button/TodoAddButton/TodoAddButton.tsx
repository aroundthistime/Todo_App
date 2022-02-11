import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FloatingActionButton from '../FloatingActionButton/FloatingActionButton';
import {useTodoAddButton} from './useTodoAddButton';

type Props = {
  date?: Date;
};

const TodoAddButton = ({date = new Date()}: Props) => {
  const {moveToTodoFormScreen, iconSize} = useTodoAddButton(date);
  return (
    <FloatingActionButton onPress={moveToTodoFormScreen}>
      <FontAwesome5Icon name="pencil-alt" color="white" size={iconSize} />
    </FloatingActionButton>
  );
};

export default React.memo(TodoAddButton);
