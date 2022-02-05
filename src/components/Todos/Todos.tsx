import React from 'react';
import {Todo} from '../../@types/Todo';
import BoxContainer from '../Layout/BoxContainer/BoxContainer';
import {TodosList} from './styles';

type Props = {
  todos: Todo[];
  date: Date;
};

const Todos = (props: Props) => {
  return (
    <BoxContainer>
      <BoxContainer.Header>
        <BoxContainer.Title>2016년 12월 30일 (월)</BoxContainer.Title>
        <BoxContainer.SubTitle>하다네</BoxContainer.SubTitle>
      </BoxContainer.Header>
      <TodosList todos={props.todos} />
    </BoxContainer>
  );
};

export default Todos;
