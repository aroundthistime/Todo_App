import React from 'react';
import {Text, View} from 'react-native';
import {useTodoFormScreen} from './useTodoFormScreen';
import {
  ImportanceLevelSelector,
  ImportanceLevelSelectors,
  TodoForm,
  TodoInput,
} from './styles';
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
        <TodoInput>
          <TodoInput.Name>우선순위</TodoInput.Name>
          <ImportanceLevelSelectors>
            <ImportanceLevelSelector
              level={'high'}
              onPress={() => setImportanceLevel('high')}
              isSelected={importanceLevel === 'high'}
            />
            <ImportanceLevelSelector
              level={'medium'}
              onPress={() => setImportanceLevel('medium')}
              isSelected={importanceLevel === 'medium'}
            />
            <ImportanceLevelSelector
              level={'low'}
              onPress={() => setImportanceLevel('low')}
              isSelected={importanceLevel === 'low'}
            />
          </ImportanceLevelSelectors>
        </TodoInput>
      </TodoForm>
      <Footer>
        <Footer.ButtonWithContainer onPress={saveTodo} text="저장" />
      </Footer>
    </>
  );
};

export default TodoFormScreen;
