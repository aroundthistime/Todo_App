import {css} from '@emotion/native';
import React from 'react';
import {View} from 'react-native';
import {Todo} from '../../@types/Todo';
import {getFullDateStr} from '../../utils/dates';
import BoxContainer from '../Layout/BoxContainer/BoxContainer';
import {TodosList} from './styles';

type Props = {
  todos: Todo[];
  date: Date;
};

const Todos = (props: Props) => {
  return (
    <BoxContainer>
      <BoxContainer.Header
        style={css`
          flex-direction: row;
          align-items: center;
        `}>
        <View style={{flex: 1}}>
          <BoxContainer.Title>{getFullDateStr(props.date)}</BoxContainer.Title>
          <BoxContainer.SubTitle>5 / 7</BoxContainer.SubTitle>
        </View>
        <BoxContainer.HeaderRight>
          <View style={{width: 40, height: 40, backgroundColor: 'orange'}} />
        </BoxContainer.HeaderRight>
      </BoxContainer.Header>
      <TodosList todos={props.todos} />
    </BoxContainer>
  );
};

export default Todos;
