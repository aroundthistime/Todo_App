import {createSelector} from '@reduxjs/toolkit';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Month} from '../../@classes/MonthClass';
import {Todo} from '../../@types/Todo';
import {todosSelector} from '../../modules/todos';
import {filterAndSortTodos} from '../../utils/todoHandlers';

type ReturnType = {
  calender: Month;
  todos: Todo[];
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
};

export const useCalenderScreen = (): ReturnType => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const calender = new Month();
  const todosSelectorByDate = createSelector(todosSelector, todos =>
    filterAndSortTodos(todos, selectedDate),
  );
  const todos = useSelector(todosSelectorByDate);
  return {
    calender,
    todos,
    selectedDate,
    setSelectedDate,
  };
};
