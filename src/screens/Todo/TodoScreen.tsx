import React from 'react';
import ViewContainer from '../../components/Layout/ViewContainer/ViewContainer';
import {Text} from 'react-native';
import {useTodoScreen} from './useTodoScreen';
import NoTodo from '../../components/NoTodo/NoTodo';
import Footer from '../../components/Footer/Footer';
import {css} from '@emotion/native';
import {TodoDetailScreen} from './styles';

const TodoScreen = () => {
  const {
    todo,
    clearCurrentTodo,
    removeCurrentTodo,
    restoreCurrentTodo,
    moveToTodoEditScreen,
  } = useTodoScreen();
  return todo ? <TodoDetailScreen todo={todo} /> : <NoTodo />;
};

export default TodoScreen;
