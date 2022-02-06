import React from 'react';
import styled, {css} from '@emotion/native';
import {useTheme} from '@emotion/react';
import {Todo} from '../../@types/Todo';
import {TouchableOpacity, View} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import ListItemContainer from '../Layout/ListItemContainer/ListItemContainer';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import Button from '../Button/DefaultButton/Button';
import {clearTodo, removeTodo, restoreTodo} from '../../modules/todos';

type TodosListProps = {
  todos: Todo[];
};

export const TodosList = (props: TodosListProps) => {
  const {
    button: {
      default: {width: buttonWidth},
    },
    layout: {columnGap},
  } = useTheme();
  return (
    <SwipeListView
      data={props.todos}
      renderItem={({item: todo}) => <TodoItem todo={todo} />}
      renderHiddenItem={({item: todo}) => (
        <HiddenButtons todoId={todo.id} cleared={todo.cleared} />
      )}
      keyExtractor={todo => todo.id.toString()}
      rightOpenValue={-(buttonWidth * 2 + columnGap)}
      disableRightSwipe={true}
    />
  );
};

const TodoItem = ({todo}: {todo: Todo}) => {
  const navigation = useNavigation();
  const {
    color: {coral, yellow, green},
  } = useTheme();
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate('Todo', {todoId: todo.id})}>
      <ListItemContainer>
        <TodoTitleText
          style={css`
            text-decoration: ${todo.cleared ? 'line-through' : 'none'};
            opacity: ${todo.cleared ? '0.3' : '1'};
          `}>
          {todo.title}
        </TodoTitleText>
        <TodoImportantLevelIndicator
          style={css`
            opacity: ${todo.cleared ? '0.3' : '1'};
            background-color: ${todo.importanceLevel === 'high'
              ? coral
              : todo.importanceLevel === 'medium'
              ? yellow
              : green};
          `}
        />
      </ListItemContainer>
    </TouchableOpacity>
  );
};

type TodoItemHiddenButtonsProps = {
  todoId: number;
  cleared: boolean;
};

const HiddenButtons = ({todoId, cleared}: TodoItemHiddenButtonsProps) => {
  const dispatch = useDispatch();
  const {
    button: {
      default: {width, height},
      color: {approveBtnColor, cancelBtnColor, restoreBtnColor},
    },
  } = useTheme();
  return (
    <View
      style={css`
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        flex: 1;
      `}>
      {cleared ? (
        <Button onPress={() => dispatch(restoreTodo(todoId))}>
          <Button.Container
            style={css`
              width: ${width.toString()}px;
              height: ${height.toString()}px;
              background-color: ${restoreBtnColor};
            `}>
            <Button.Text>복원</Button.Text>
          </Button.Container>
        </Button>
      ) : (
        <>
          <Button onPress={() => dispatch(clearTodo(todoId))}>
            <Button.Container
              style={css`
                width: ${width.toString()}px;
                height: ${height.toString()}px;
                background-color: ${approveBtnColor};
                margin-right: 5px;
              `}>
              <Button.Text>성공</Button.Text>
            </Button.Container>
          </Button>
          <Button onPress={() => dispatch(removeTodo(todoId))}>
            <Button.Container
              style={css`
                width: ${width.toString()}px;
                height: ${height.toString()}px;
                background-color: ${cancelBtnColor};
              `}>
              <Button.Text>삭제</Button.Text>
            </Button.Container>
          </Button>
        </>
      )}
    </View>
  );
};

const TodoTitleText = styled.Text`
  font-size: ${props => props.theme.font.size.default.toString()}px;
  flex: 1;
`;

const TodoImportantLevelIndicator = styled.View`
  width: ${props => props.theme.layout.indicatorSize.toString()}px;
  height: ${props => props.theme.layout.indicatorSize.toString()}px;
  border-radius: ${props =>
    (props.theme.layout.indicatorSize / 2).toString()}px;
  margin-left: ${props => props.theme.layout.columnGap.toString()}px;
`;
