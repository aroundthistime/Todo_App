import {ReactNativeStyle} from '@emotion/native';
import {useTheme} from '@emotion/react';
import {createSelector} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';
import {Todo} from '../../@types/Todo';
import {todosSelector} from '../../modules/todos';
import {
  filterTodosForToday,
  sortTodosByImportanceLevel,
} from '../../utils/todoHandlers';

const getTodosForTodaySortedByImportanceLevel = (todos: Todo[]): Todo[] => {
  const unSortedTodosForToday = filterTodosForToday(todos);
  return sortTodosByImportanceLevel(unSortedTodosForToday);
};

const todosForTodaySelector = createSelector(todosSelector, todos =>
  getTodosForTodaySortedByImportanceLevel(todos),
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
