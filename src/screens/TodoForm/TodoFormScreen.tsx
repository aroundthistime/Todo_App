import React from 'react';
import {Text, View} from 'react-native';
import {useTodoFormScreen} from './useTodoFormScreen';
import {
  DeadlineInput,
  ImportanceLevelSelector,
  ImportanceLevelSelectors,
  TodoForm,
  TodoInput,
} from './styled';
import Footer from '../../components/Footer/Footer';
import {IMPORTANCE_LEVEL_DICT} from '../../@types/Todo';
import DateTimePicker from 'react-native-modal-datetime-picker';

const TodoFormScreen = () => {
  const {
    todoTitleInput,
    todoContentInput,
    importanceLevel,
    setImportanceLevel,
    deadline,
    saveTodo,
    deadlinePickerVisible,
    showDatePicker,
    hideDatePicker,
    handleDateConfirm,
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
            {Object.keys(IMPORTANCE_LEVEL_DICT).map(level => (
              <ImportanceLevelSelector
                level={level}
                onPress={() => setImportanceLevel(level)}
                isSelected={importanceLevel === level}
                key={level}
              />
            ))}
          </ImportanceLevelSelectors>
        </TodoInput>
        <TodoInput>
          <TodoInput.Name>기한</TodoInput.Name>
          <DeadlineInput onPress={showDatePicker} deadline={deadline} />
        </TodoInput>
        <DateTimePicker
          isVisible={deadlinePickerVisible}
          mode="date"
          date={deadline}
          onConfirm={handleDateConfirm}
          onCancel={() => hideDatePicker()}
          minimumDate={new Date()}
        />
      </TodoForm>
      <Footer>
        <Footer.ButtonWithContainer onPress={saveTodo} text="저장" />
      </Footer>
    </>
  );
};

export default TodoFormScreen;
