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
  todosListStyle: ReactNativeStyle;
};

export const useCalenderScreen = (): ReturnType => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const todosSelectorByDate = createSelector(todosSelector, todos =>
    filterAndSortTodos(todos, selectedDate),
  );
  const todos = useSelector(todosSelectorByDate);
  return {
    todos,
    selectedDate,
    setSelectedDate,
    todosListStyle: {
      flex: 1,
      marginTop: 30,
    },
  };
};
