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

const todosForToday = createSelector(todosSelector, todos =>
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

  // const todos: Todo[] = useSelector(todosForToday);
  const todos: Todo[] = [
    {
      id: 1,
      title: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      content: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      cleared: false,
      deadline: new Date().getTime(),
      importanceLevel: 'high',
    },
    {
      id: 2,
      title: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      content: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      cleared: true,
      deadline: new Date().getTime(),
      importanceLevel: 'medium',
    },
    {
      id: 3,
      title: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      content: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      cleared: false,
      deadline: new Date().getTime(),
      importanceLevel: 'low',
    },
    {
      id: 4,
      title: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      content: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      cleared: true,
      deadline: new Date().getTime(),
      importanceLevel: 'low',
    },
    {
      id: 5,
      title: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      content: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      cleared: false,
      deadline: new Date().getTime(),
      importanceLevel: 'medium',
    },
    {
      id: 6,
      title: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      content: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      cleared: false,
      deadline: new Date().getTime(),
      importanceLevel: 'medium',
    },
    {
      id: 7,
      title: '할검낭새ㅜㄴㅇ새ㅑ',
      content: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      cleared: true,
      deadline: new Date().getTime(),
      importanceLevel: 'high',
    },
    {
      id: 8,
      title: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      content: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      cleared: false,
      deadline: new Date().getTime(),
      importanceLevel: 'high',
    },
    {
      id: 9,
      title: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      content: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      cleared: false,
      deadline: new Date().getTime(),
      importanceLevel: 'high',
    },
    {
      id: 10,
      title: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      content: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      cleared: false,
      deadline: new Date().getTime(),
      importanceLevel: 'high',
    },
    {
      id: 11,
      title: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      content: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      cleared: false,
      deadline: new Date().getTime(),
      importanceLevel: 'high',
    },
    {
      id: 12,
      title: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      content: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      cleared: false,
      deadline: new Date().getTime(),
      importanceLevel: 'high',
    },
  ];

  return {drawerScreenContainerStyle, todos};
};
