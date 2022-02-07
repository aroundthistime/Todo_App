import React from 'react';
import styled, {css} from '@emotion/native';
import {Todo} from '../../@types/Todo';
import TodoDetail from '../../components/TodoDetail/TodoDetail';
import Footer from '../../components/Footer/Footer';
import TodoImportantLevelIndicator from '../../components/TodoImportantLevelIndicator/TodoImportantLevelIndicator';
import {useTheme} from '@emotion/react';
import {getFullDateStr} from '../../utils/dates';

type Props = {
  todo: Todo;
};

export const TodoDetailScreen = ({todo}: Props) => {
  const {
    icon: {
      size: {default: defaultIconSize},
    },
  } = useTheme();
  return (
    <>
      <TodoDetail>
        <TodoDetail.Header>
          <TodoDetail.HeaderRow>
            {/* <TodoDetail.TodoStatusIcon isCleared={todo.cleared} /> */}
            <TodoDetail.TodoTitle>{todo.title}</TodoDetail.TodoTitle>
            {/* <TodoImportantLevelIndicator todo={todo} size={defaultIconSize} /> */}
          </TodoDetail.HeaderRow>
          <TodoDetail.HeaderRow>
            <TodoDetail.DeadlineText>
              {getFullDateStr(new Date(todo.deadline))}까지
            </TodoDetail.DeadlineText>
          </TodoDetail.HeaderRow>
        </TodoDetail.Header>
        <TodoDetail.Body />
      </TodoDetail>
      <Footer />
    </>
  );
};
