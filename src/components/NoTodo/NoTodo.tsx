import React from 'react';
import styled from '@emotion/native';

const NoTodoText = styled.Text`
  font-size: ${props => props.theme.font.size.default.toString()}px;
`;

const NoTodo = () => <NoTodoText>해당 투두가 존재하지 않습니다.</NoTodoText>;

export default NoTodo;
