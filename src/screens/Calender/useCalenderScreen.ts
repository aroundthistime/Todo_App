import {ReactNativeStyle} from '@emotion/native';
import {useTheme} from '@emotion/react';
import {createSelector} from '@reduxjs/toolkit';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Todo} from '../../@types/Todo';
import {todosSelector} from '../../modules/todos';
import {filterAndSortTodos} from '../../utils/todoHandlers';

type ReturnType = {
  todos: Todo[];
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  screenContainerPadding: {
    vertical: number;
    horizontal: number;
  };
  todosListStyle: ReactNativeStyle;
};

export const useCalenderScreen = (): ReturnType => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const todosSelectorByDate = createSelector(todosSelector, todos =>
    filterAndSortTodos(todos, selectedDate),
  );
  const todos = useSelector(todosSelectorByDate);
  const {
    layout: {
      padding: {horizontal},
      drawerScreen: {
        padding: {vertical},
      },
    },
  } = useTheme();
  return {
    todos,
    selectedDate,
    setSelectedDate,
    screenContainerPadding: {
      vertical,
      horizontal,
    },
    todosListStyle: {
      flex: 1,
      marginTop: 30,
    },
  };
};
