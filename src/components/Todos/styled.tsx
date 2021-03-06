import React, {useCallback, useMemo} from 'react';
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
import routes from '../../routes';
import {HomeDrawerScreenGlobalProps} from '../../navigations/types';
import NoTodo from '../NoTodo/NoTodo';
import TodoImportantLevelIndicator from '../TodoImportantLevelIndicator/TodoImportantLevelIndicator';

type TodosListProps = {
  todos: Todo[];
};

export const TodosList = React.memo((props: TodosListProps) => {
  const {
    button: {
      default: {width: buttonWidth},
    },
    layout: {
      padding: {horizontal: paddingHorizontal},
      columnGap,
    },
  } = useTheme();
  const renderItem = useCallback(
    ({item: todo}) => <TodoItem todo={todo} />,
    [],
  );
  const renderHiddenItem = useCallback(
    ({item: todo}) => <HiddenButtons todoId={todo.id} cleared={todo.cleared} />,
    [],
  );
  const keyExtractor = useCallback(todo => todo.id.toString(), []);
  const rightOpenValue = useMemo(() => -(buttonWidth * 2 + columnGap), []);
  return props.todos.length === 0 ? (
    <NoTodo />
  ) : (
    <SwipeListView
      data={props.todos}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      keyExtractor={keyExtractor}
      rightOpenValue={rightOpenValue}
      disableRightSwipe={true}
      removeClippedSubviews={true}
      style={{
        marginHorizontal: -paddingHorizontal,
        paddingHorizontal,
      }}
    />
  );
});

const TodoItem = React.memo(({todo}: {todo: Todo}) => {
  const navigation = useNavigation<HomeDrawerScreenGlobalProps['navigation']>();
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate(routes.Todo, {todoId: todo.id})}>
      <ListItemContainer>
        <TodoTitleText
          style={css`
            text-decoration: ${todo.cleared ? 'line-through' : 'none'};
            opacity: ${todo.cleared ? '0.3' : '1'};
          `}>
          {todo.title}
        </TodoTitleText>
        <TodoImportantLevelIndicator todo={todo} />
      </ListItemContainer>
    </TouchableOpacity>
  );
});

type TodoItemHiddenButtonsProps = {
  todoId: number;
  cleared: boolean;
};

const HiddenButtons = React.memo(
  ({todoId, cleared}: TodoItemHiddenButtonsProps) => {
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
              <Button.Text>??????</Button.Text>
            </Button.Container>
          </Button>
        ) : (
          <Button onPress={() => dispatch(clearTodo(todoId))}>
            <Button.Container
              style={css`
                width: ${width.toString()}px;
                height: ${height.toString()}px;
                background-color: ${approveBtnColor};
              `}>
              <Button.Text>??????</Button.Text>
            </Button.Container>
          </Button>
        )}
        <Button onPress={() => dispatch(removeTodo(todoId))}>
          <Button.Container
            style={css`
              width: ${width.toString()}px;
              height: ${height.toString()}px;
              background-color: ${cancelBtnColor};
              margin-left: 5px;
            `}>
            <Button.Text>??????</Button.Text>
          </Button.Container>
        </Button>
      </View>
    );
  },
);

const TodoTitleText = styled.Text`
  font-size: ${props => props.theme.font.size.default.toString()}px;
  flex: 1;
`;
