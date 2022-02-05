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
      <TodosList todos={props.todos} />
    </BoxContainer>
  );
};

export default Todos;
