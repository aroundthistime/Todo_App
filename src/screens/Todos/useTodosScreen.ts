import {createSelector} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';
import {Todo} from '../../@types/Todo';
import {todosSelector} from '../../modules/todos';
import {filterAndSortTodos} from '../../utils/todoHandlers';

type ReturnType = {
  todos: Todo[];
};

const todosForTodaySelector = createSelector(todosSelector, todos =>
  filterAndSortTodos(todos, new Date()),
);

export const useTodosScreen = (): ReturnType => {
  const todos: Todo[] = useSelector(todosForTodaySelector);
  return {todos};
};
