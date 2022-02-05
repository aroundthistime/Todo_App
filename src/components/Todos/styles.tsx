import React from 'react';
import styled, {css} from '@emotion/native';
import {Todo} from '../../@types/Todo';
import {FlatList, Text} from 'react-native';
import ListItemContainer from '../Layout/ListItemContainer/ListItemContainer';
import theme from '../../../theme';
import {TouchableOpacity} from 'react-native-gesture-handler';

type TodosListProps = {
  todos: Todo[];
};

export const TodosList = (props: TodosListProps) => {
  return (
    <FlatList
      data={props.todos}
      renderItem={({item: todo}) => <TodosList.Todo todo={todo} />}
      keyExtractor={item => item.id.toString()}
    />
  );
};

TodosList.Todo = ({todo}: {todo: Todo}) => (
  <TouchableOpacity>
    <ListItemContainer>
      <TodoTitleText>{todo.title}</TodoTitleText>
      <TodoImportantLevelIndicator />
    </ListItemContainer>
  </TouchableOpacity>
);

const TodoTitleText = styled.Text`
  font-size: ${props => props.theme.font.size.default.toString()}px;
  flex: 1;
`;

const TodoImportantLevelIndicator = styled.View`
  width: ${props => props.theme.layout.indicatorSize.toString()}px;
  height: ${props => props.theme.layout.indicatorSize.toString()}px;
  border-radius: ${props =>
    (props.theme.layout.indicatorSize / 2).toString()}px;
  background-color: red;
  margin-left: 30px;
`;
