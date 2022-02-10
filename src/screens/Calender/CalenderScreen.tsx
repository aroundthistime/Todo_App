import React from 'react';
import {Text} from 'react-native';
import Calender from '../../components/Calender/Calender';
import DrawerScreenContainer from '../../components/Layout/DrawerScreenContainer/DrawerScreenContainer';
import {useCalenderScreen} from './useCalenderScreen';

const CalenderScreen = () => {
  const {todos, selectedDate, setSelectedDate, screenContainerPadding} =
    useCalenderScreen();
  return (
    <DrawerScreenContainer
      style={{
        paddingVertical: screenContainerPadding.vertical,
        paddingHorizontal: screenContainerPadding.horizontal,
      }}>
      <Calender selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </DrawerScreenContainer>
  );
};

export default CalenderScreen;
