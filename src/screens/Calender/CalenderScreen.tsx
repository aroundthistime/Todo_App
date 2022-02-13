import {css} from '@emotion/native';
import React from 'react';
import {Text} from 'react-native';
import TodoAddButton from '../../components/Button/TodoAddButton/TodoAddButton';
import Calender from '../../components/Calender/Calender';
import DrawerScreenContainer from '../../components/Layout/DrawerScreenContainer/DrawerScreenContainer';
import Todos from '../../components/Todos/Todos';
import {datesAreOnSameDay} from '../../utils/dates';
import {useCalenderScreen} from './useCalenderScreen';

const CalenderScreen = () => {
  const {todos, selectedDate, setSelectedDate, todosListStyle} =
    useCalenderScreen();
  return (
    <DrawerScreenContainer style={{paddingBottom: 30}}>
      <Calender selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <Todos date={selectedDate} todos={todos} style={todosListStyle} />
      {(datesAreOnSameDay(new Date(), selectedDate) ||
        new Date() < selectedDate) && <TodoAddButton date={selectedDate} />}
    </DrawerScreenContainer>
  );
};

export default CalenderScreen;
