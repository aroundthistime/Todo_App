import React from 'react';
import ViewContainer from '../../components/Layout/ViewContainer/ViewContainer';
import {Text} from 'react-native';
import {useTodoScreen} from './useTodoScreen';
import NoTodo from '../../components/NoTodo/NoTodo';

const TodoScreen = () => {
  const {
    todo,
    clearCurrentTodo,
    removeCurrentTodo,
    restoreCurrentTodo,
    moveToTodoEditScreen,
  } = useTodoScreen();
  return <ViewContainer>{todo ? <Text>Todo</Text> : <NoTodo />}</ViewContainer>;
};

export default TodoScreen;
