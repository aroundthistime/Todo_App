import React from 'react';
import {useTodoScreen} from './useTodoScreen';
import NoTodo from '../../components/NoTodo/NoTodo';
import Footer from '../../components/Footer/Footer';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import TodoDetail from '../../components/TodoDetail/TodoDetail';
import {getFullDateStr} from '../../utils/dates';

const TodoScreen = () => {
  const {
    todo,
    clearCurrentTodo,
    removeCurrentTodo,
    restoreCurrentTodo,
    moveToTodoEditScreen,
    footerBtnIconSize,
  } = useTodoScreen();
  return todo ? (
    <>
      <TodoDetail>
        <TodoDetail.Header>
          <TodoDetail.HeaderRow>
            <TodoDetail.TodoTitle>
              <TodoDetail.TodoStatusIcon
                cleared={todo.cleared}
                importanceLevel={todo.importanceLevel}
              />
              {todo.title}
            </TodoDetail.TodoTitle>
          </TodoDetail.HeaderRow>
          <TodoDetail.HeaderRow>
            <TodoDetail.DeadlineText>
              {getFullDateStr(new Date(todo.deadline))}까지
            </TodoDetail.DeadlineText>
          </TodoDetail.HeaderRow>
        </TodoDetail.Header>
        <TodoDetail.Body>
          <TodoDetail.Content>{todo.content}</TodoDetail.Content>
        </TodoDetail.Body>
      </TodoDetail>
      <Footer.Container style={{justifyContent: 'space-around'}}>
        {todo.cleared ? (
          <Footer.ButtonWithIcon onPress={restoreCurrentTodo} text="복원">
            <FontAwesome5Icon name="redo" size={footerBtnIconSize} />
          </Footer.ButtonWithIcon>
        ) : (
          <Footer.ButtonWithIcon onPress={clearCurrentTodo} text="완료">
            <FontAwesome5Icon name="check" size={footerBtnIconSize} />
          </Footer.ButtonWithIcon>
        )}
        <Footer.ButtonWithIcon onPress={moveToTodoEditScreen} text="편집">
          <FontAwesome5Icon name="edit" size={footerBtnIconSize} />
        </Footer.ButtonWithIcon>
        <Footer.ButtonWithIcon onPress={removeCurrentTodo} text="삭제">
          <FontAwesome5Icon name="trash" size={footerBtnIconSize} />
        </Footer.ButtonWithIcon>
      </Footer.Container>
    </>
  ) : (
    <NoTodo />
  );
};

export default TodoScreen;
