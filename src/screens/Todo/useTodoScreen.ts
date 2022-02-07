import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {Todo} from '../../@types/Todo';
import {RootState} from '../../modules/root';
import {clearTodo, removeTodo, restoreTodo} from '../../modules/todos';
import {ROOT_NAVIGATION_SCREEN_NAMES} from '../../navigations/RootNavigation';
import {RootStackScreenProps} from '../../navigations/types';

type ReturnType = {
  todo: Todo | undefined;
  clearCurrentTodo: Function;
  removeCurrentTodo: Function;
  restoreCurrentTodo: Function;
  moveToTodoEditScreen: Function;
};

export const useTodoScreen = (): ReturnType => {
  const {
    params: {todoId},
  } = useRoute<RootStackScreenProps<'Todo'>['route']>();
  const currentTodo: Todo | undefined = useSelector((state: RootState) =>
    state.todos.find(todo => todo.id === todoId),
  );
  const dispatch = useDispatch();
  const navigation =
    useNavigation<RootStackScreenProps<'Todo'>['navigation']>();
  const clearCurrentTodo = () => {
    if (currentTodo?.id) {
      dispatch(clearTodo(currentTodo.id));
    }
  };
  const removeCurrentTodo = () => {
    if (currentTodo?.id) {
      dispatch(removeTodo(currentTodo.id));
    }
  };
  const restoreCurrentTodo = () => {
    if (currentTodo?.id) {
      dispatch(restoreTodo(currentTodo.id));
    }
  };
  const moveToTodoEditScreen = () => {
    navigation.navigate(ROOT_NAVIGATION_SCREEN_NAMES.TodoForm, {
      todo: currentTodo,
    });
  };
  return {
    todo: currentTodo,
    clearCurrentTodo,
    removeCurrentTodo,
    restoreCurrentTodo,
    moveToTodoEditScreen,
  };
};
