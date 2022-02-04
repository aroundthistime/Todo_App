import {useTheme} from '@emotion/react';
import {createSelector} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';
import {StyleObject} from '../../@types/StyleObject';
import {Todo} from '../../@types/Todo';
import {todosSelector} from '../../modules/todos';
import {extractNumbersFromString} from '../../utils/math';
import {
  filterTodosForToday,
  sortTodosByImportanceLevel,
} from '../../utils/todoHandlers';

const getTodosForTodaySortedByImportanceLevel = (todos: Todo[]): Todo[] => {
  const unSortedTodosForToday = filterTodosForToday(todos);
  return sortTodosByImportanceLevel(unSortedTodosForToday);
};

const todosForToday = createSelector(todosSelector, todos =>
  getTodosForTodaySortedByImportanceLevel(todos),
);

export const useTodosScreen = () => {
  const {
    layout: {
      padding: {horizontal: paddingHorizontal, vertical: paddingVertical},
    },
  } = useTheme();
  const drawerScreenContainerStyle: StyleObject = {
    paddingHorizontal: extractNumbersFromString(paddingHorizontal), //styleObject에서는 단위 없어야됨
    paddingVertical: extractNumbersFromString(paddingVertical),
  };

  // const todos: Todo[] = useSelector(todosForToday);
  const todos: Todo[] = [
    {
      id: 1,
      title: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      content: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      cleared: false,
      deadline: new Date().getTime(),
      importanceLevel: 'high',
    },
    {
      id: 2,
      title: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      content: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      cleared: false,
      deadline: new Date().getTime(),
      importanceLevel: 'high',
    },
  ];

  return {drawerScreenContainerStyle, todos};
};
