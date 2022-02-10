import {useNavigation, useRoute} from '@react-navigation/native';
import {useState} from 'react';
import {Platform} from 'react-native';
import {useDispatch} from 'react-redux';
import {ImportanceLevel} from '../../@types/Todo';
import {useInput, useInputType} from '../../hooks/useInput';
import {addTodo, editTodo} from '../../modules/todos';
import {
  RootStackNavigationProps,
  RootStackScreenProps,
} from '../../navigations/types';
import {showToast} from '../../utils/toastHandler';

type ReturnType = {
  todoTitleInput: useInputType;
  todoContentInput: useInputType;
  importanceLevel: ImportanceLevel;
  setImportanceLevel: React.Dispatch<React.SetStateAction<ImportanceLevel>>;
  deadline: Date;
  setDeadline: React.Dispatch<React.SetStateAction<Date>>;
  saveTodo: () => void;
  deadlinePickerVisible: boolean;
  showDatePicker: Function;
  hideDatePicker: Function;
  handleDateConfirm: (date: Date) => void;
};

export const useTodoFormScreen = (): ReturnType => {
  const {
    params: {todo},
  } = useRoute<RootStackScreenProps<'TodoForm'>['route']>();
  const navigation = useNavigation<RootStackNavigationProps<'TodoForm'>>();
  const dispatch = useDispatch();
  const [isDatePickerVisible, setDatePickerVisibility] =
    useState<boolean>(false);
  const todoTitleInput = useInput(todo ? todo.title : '');
  const todoContentInput = useInput(todo ? todo.content : '');
  const [importanceLevel, setImportanceLevel] = useState<ImportanceLevel>(
    todo ? todo.importanceLevel : 'medium',
  );
  const [deadline, setDeadline] = useState<Date>(
    todo ? new Date(todo.deadline) : new Date(),
  );
  const saveTodo = () => {
    const validator = (): boolean => {
      if (todoTitleInput.value.length === 0) {
        showToast('투두 제목을 입력해주세요');
        return false;
      }
      return true;
    };
    if (validator()) {
      const todoFields = {
        title: todoTitleInput.value,
        content: todoContentInput.value,
        deadline: deadline.getTime(),
        importanceLevel,
      };
      if (todo) {
        dispatch(
          editTodo({
            id: todo.id,
            ...todoFields,
          }),
        );
        showToast('투두를 수정했습니다');
      } else {
        dispatch(
          addTodo({
            ...todoFields,
          }),
        );
      }
      navigation.goBack();
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date: Date) => {
    hideDatePicker();
    setDeadline(date);
  };

  return {
    todoTitleInput,
    todoContentInput,
    importanceLevel,
    setImportanceLevel,
    deadline,
    setDeadline,
    saveTodo,
    deadlinePickerVisible: isDatePickerVisible,
    showDatePicker,
    hideDatePicker,
    handleDateConfirm,
  };
};
