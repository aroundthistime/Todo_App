import React from 'react';
import styled from '@emotion/native';
import {Month} from '../../@classes/MonthClass';
import BoxContainer from '../Layout/BoxContainer/BoxContainer';

type Props = {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
};

const Calender = ({selectedDate, setSelectedDate}: Props) => {
  const month = new Month();
  return (
    <BoxContainer>
      <Calender.Header>
        <Calender.HeaderText>
          {month.year}년 {month.month}월
        </Calender.HeaderText>
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
  background-color: pink;
`;

Calender.Main = styled.View``;

export default Calender;
