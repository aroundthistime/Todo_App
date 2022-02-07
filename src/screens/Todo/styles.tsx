import React from 'react';
import styled, {css} from '@emotion/native';
import {Todo} from '../../@types/Todo';
import TodoDetail from '../../components/TodoDetail/TodoDetail';
import Footer from '../../components/Footer/Footer';

type Props = {
  todo: Todo;
};

export const TodoDetailScreen = ({todo}: Props) => (
  <>
    <TodoDetail>
      <TodoDetail.Header>
        <TodoDetail.HeaderRow>
          <TodoDetail.TodoStatusIcon isCleared={todo.cleared} />
          <TodoDetail.TodoTitle>{todo.title}</TodoDetail.TodoTitle>
        </TodoDetail.HeaderRow>
      </TodoDetail.Header>
    </TodoDetail>
    <Footer />
  </>
);
