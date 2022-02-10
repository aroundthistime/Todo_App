import {ReactNativeStyle} from '@emotion/native';
import {useTheme} from '@emotion/react';
import {createSelector} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';
import {Todo} from '../../@types/Todo';
import {todosSelector} from '../../modules/todos';
import {filterAndSortTodos} from '../../utils/todoHandlers';

const todosForTodaySelector = createSelector(todosSelector, todos =>
  filterAndSortTodos(todos, new Date()),
);

export const useTodosScreen = () => {
  const {
    layout: {
      padding: {horizontal: paddingHorizontal, vertical: paddingVertical},
    },
  } = useTheme();
  const drawerScreenContainerStyle: ReactNativeStyle = {
    paddingHorizontal,
    paddingVertical,
  };

  const todos: Todo[] = useSelector(todosForTodaySelector);

  return {drawerScreenContainerStyle, todos};
};
