import React from 'react';
import {Text, View} from 'react-native';
import {useTodoFormScreen} from './useTodoFormScreen';
import {TodoForm, TodoInput} from './styles';
import Footer from '../../components/Footer/Footer';

const TodoFormScreen = () => {
  const {
    todoTitleInput,
    todoContentInput,
    importanceLevel,
    setImportanceLevel,
    deadline,
    setDeadline,
    saveTodo,
  } = useTodoFormScreen();
  return (
    <>
      <TodoForm>
        <TodoInput>
          <TodoInput.Name>제목</TodoInput.Name>
          <TodoInput.Input
            {...todoTitleInput}
            placeholder="제목을 작성해주세요"
          />
        </TodoInput>
        <TodoInput>
          <TodoInput.Name>내용</TodoInput.Name>
          <TodoInput.Input
            {...todoContentInput}
            multiline={true}
            placeholder="추가 설명을 적어주세요 (선택)"
            maxLength={400}
          />
        </TodoInput>
      </TodoForm>
      <Footer>
        <Footer.ButtonWithContainer onPress={saveTodo} text="저장" />
      </Footer>
    </>
  );
};

export default TodoFormScreen;
