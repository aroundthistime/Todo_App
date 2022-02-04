import React from 'react';
import {FlatList, Text} from 'react-native';
import {Todo} from '../../@types/Todo';
import TabsDivider from '../Layout/TabsDivider/TabsDivider';

type Props = {
  todos: Todo[];
};

const TodosList = (props: Props) => {
  return (
    <FlatList
      data={props.todos}
      renderItem={({item: todo}) => <TodosList.Todo todo={todo} />}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={TabsDivider}
    />
  );
};

TodosList.Todo = ({todo}: {todo: Todo}) => <Text>{todo.title}</Text>;

export default TodosList;
