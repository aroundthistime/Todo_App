import React, {useEffect} from 'react';
import styled from '@emotion/native';
import {Month} from '../../@classes/MonthClass';
import BoxContainer from '../Layout/BoxContainer/BoxContainer';
import Button from '../Button/DefaultButton/Button';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {useTheme} from '@emotion/react';
import {useCalender} from './useCalender';

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
      <Calender.Main />
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

export default Calender;
