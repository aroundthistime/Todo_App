import {css} from '@emotion/native';
import React from 'react';
import {View} from 'react-native';
import {Todo} from '../../@types/Todo';
import {getFullDateStr} from '../../utils/dates';
import {countClearedTodos} from '../../utils/todoHandlers';
import BoxContainer from '../Layout/BoxContainer/BoxContainer';
import PercentageCircle from '../PercentageCircle/PercentageCircle';
import {TodosList} from './styles';

type Props = {
  todos: Todo[];
  date: Date;
};

const Todos = (props: Props) => {
  const clearedTodosCount = countClearedTodos(props.todos);
  return (
    <BoxContainer
      style={css`
        height: 600px;
      `}>
      <BoxContainer.Header
        style={css`
          flex-direction: row;
          align-items: center;
        `}>
        <View style={{flex: 1}}>
          <BoxContainer.Title>{getFullDateStr(props.date)}</BoxContainer.Title>
          <BoxContainer.SubTitle>
            {clearedTodosCount} / {props.todos.length}
          </BoxContainer.SubTitle>
        </View>
        <BoxContainer.HeaderRight>
          <PercentageCircle
            percentage={parseInt(
              (clearedTodosCount / props.todos.length) * 100,
            )}
          />
        </BoxContainer.HeaderRight>
      </BoxContainer.Header>
      <TodosList todos={props.todos} />
    </BoxContainer>
  );
};

export default Todos;
