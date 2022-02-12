import {css, ReactNativeStyle} from '@emotion/native';
import {useTheme} from '@emotion/react';
import React, {useMemo} from 'react';
import {View} from 'react-native';
import {Todo} from '../../@types/Todo';
import {getFullDateStr} from '../../utils/dates';
import {countClearedTodos} from '../../utils/todoHandlers';
import BoxContainer from '../Layout/BoxContainer/BoxContainer';
import PercentageCircle from '../PercentageCircle/PercentageCircle';
import {TodosList} from './styled';

type Props = {
  todos: Todo[];
  date: Date;
  style?: ReactNativeStyle;
};

const Todos = ({todos, date, style = {}}: Props) => {
  const clearedTodosCount = useMemo(() => countClearedTodos(todos), [todos]);
  const percentage = useMemo(
    () => parseInt((clearedTodosCount / todos.length) * 100),
    [clearedTodosCount, todos.length],
  );
  return (
    <BoxContainer
      style={{
        ...css`
          flex: 1;
        `,
        ...style,
      }}>
      <BoxContainer.Header
        style={css`
          flex-direction: row;
          align-items: center;
        `}>
        <View style={{flex: 1}}>
          <BoxContainer.Title>{getFullDateStr(date)}</BoxContainer.Title>
          <BoxContainer.SubTitle>
            {clearedTodosCount} / {todos.length}
          </BoxContainer.SubTitle>
        </View>
        <BoxContainer.HeaderRight>
          <PercentageCircle percentage={percentage} />
        </BoxContainer.HeaderRight>
      </BoxContainer.Header>
      <TodosList todos={todos} />
    </BoxContainer>
  );
};

export default Todos;
