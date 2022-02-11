import React, {useEffect} from 'react';
import styled, {css} from '@emotion/native';
import {Month} from '../../@classes/MonthClass';
import BoxContainer from '../Layout/BoxContainer/BoxContainer';
import Button from '../Button/DefaultButton/Button';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {useTheme} from '@emotion/react';
import {useCalender} from './useCalender';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import {datesAreOnSameDay} from '../../utils/dates';

type Props = {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
};

const Calender = ({selectedDate, setSelectedDate}: Props) => {
  const {
    startDate,
    endDate,
    year,
    month,
    changeToPreviousMonth,
    changeToNextMonth,
    arrowIconSize,
  } = useCalender();
  return (
    <BoxContainer>
      <Calender.Header>
        <Button onPress={changeToPreviousMonth}>
          <FontAwesome5Icon name="caret-left" size={arrowIconSize} />
        </Button>
        <Calender.HeaderText>
          {year}년 {month}월
        </Calender.HeaderText>
        <Button onPress={changeToNextMonth}>
          <FontAwesome5Icon name="caret-right" size={arrowIconSize} />
        </Button>
      </Calender.Header>
      <Calender.Main>
        <Calender.DayCells />
        <Calender.DateCells
          startDate={startDate}
          endDate={endDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </Calender.Main>
    </BoxContainer>
  );
};

Calender.Section = styled.View`
  padding-top: ${props => props.theme.layout.padding.vertical.toString()}px;
  padding-bottom: ${props => props.theme.layout.padding.vertical.toString()}px;
  padding-right: ${props => props.theme.layout.padding.horizontal.toString()}px;
  padding-left: ${props => props.theme.layout.padding.horizontal.toString()}px;
`;

Calender.Header = styled(Calender.Section)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

Calender.HeaderText = styled.Text`
  font-size: ${props => props.theme.font.size.large.toString()}px;
  font-weight: bold;
`;

Calender.Main = styled.View``;

Calender.Row = styled.View`
  flex-direction: row;
`;

Calender.Cell = styled.View`
  padding-top: ${props => props.theme.calender.cell.padding.toString()}px;
  padding-bottom: ${props => props.theme.calender.cell.padding.toString()}px;
  padding-right: ${props => props.theme.calender.cell.padding.toString()}px;
  padding-left: ${props => props.theme.calender.cell.padding.toString()}px;
  justify-content: center;
  align-items: center;
`;

Calender.DayCell = styled(Calender.Cell)`
  flex: 1;
`;

Calender.DayCells = React.memo(() => {
  const {
    color: {skyblue},
  } = useTheme();
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'] as const;
  const getTextColor = (day: string): string =>
    day === 'SUN' ? 'red' : day === 'SAT' ? skyblue : 'black';
  return (
    <Calender.Row>
      {days.map(day => (
        <Calender.DayCell key={day}>
          <Text
            style={css`
              font-weight: bold;
              color: ${getTextColor(day)};
              text-align: center;
            `}>
            {day}
          </Text>
        </Calender.DayCell>
      ))}
    </Calender.Row>
  );
});

type DateCellsProps = {
  startDate: Date;
  endDate: Date;
} & Props;

Calender.DateCells = React.memo(
  ({startDate, endDate, selectedDate, setSelectedDate}: DateCellsProps) => {
    const cells = [];
    for (let i = 0; i < startDate.getDay(); i++) {
      cells.push(<Calender.EmptyCell />);
    }
    for (let i = startDate.getDate(); i < endDate.getDate(); i++) {
      const date = new Date(startDate.getFullYear(), startDate.getMonth(), i);
      cells.push(
        <Calender.DateCell
          date={date}
          isSelected={datesAreOnSameDay(date, selectedDate)}
          onPress={() => setSelectedDate(date)}
        />,
      );
    }
    return (
      <FlatList data={cells} renderItem={({item}) => item} numColumns={7} />
    );
  },
);

Calender.EmptyCell = React.memo(() => (
  <TouchableOpacity disabled={true} style={{flex: 1 / 7}}>
    <Calender.DateCellContainer />
  </TouchableOpacity>
));

type DateCellProps = {
  date: Date;
  isSelected: boolean;
  onPress: Function;
};

Calender.DateCell = React.memo(({date, isSelected, onPress}: DateCellProps) => {
  const {
    calender: {
      cell: {selectedCellColor},
    },
  } = useTheme();
  return (
    <TouchableOpacity style={{flex: 1 / 7}} onPress={() => onPress()}>
      <Calender.DateCellContainer
        style={{
          backgroundColor: isSelected ? selectedCellColor : 'white',
        }}>
        <Text>{date.getDate()}</Text>
      </Calender.DateCellContainer>
    </TouchableOpacity>
  );
});

Calender.DateCellContainer = styled(Calender.Cell)`
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
`;

export default Calender;
