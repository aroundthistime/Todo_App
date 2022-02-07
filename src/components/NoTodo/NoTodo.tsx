import React from 'react';
import styled from '@emotion/native';
import ViewContainer from '../Layout/ViewContainer/ViewContainer';

const NoTodoText = styled.Text`
  font-size: ${props => props.theme.font.size.default.toString()}px;
`;

const NoTodo = () => (
  <ViewContainer>
    <NoTodoText>투두가 존재하지 않습니다.</NoTodoText>
  </ViewContainer>
);

export default NoTodo;
