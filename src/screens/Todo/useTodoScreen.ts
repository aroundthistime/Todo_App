import {useTheme} from '@emotion/react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Alert} from 'react-native';
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
  footerBtnIconSize: number;
};

export const useTodoScreen = (): ReturnType => {
  const {
    params: {todoId},
  } = useRoute<RootStackScreenProps<'Todo'>['route']>();
  const currentTodo: Todo | undefined = useSelector((state: RootState) =>
    state.todos.find(todo => todo.id === todoId),
  );
  const {
    footer: {buttonIconSize: footerBtnIconSize},
  } = useTheme();
  const dispatch = useDispatch();
  const navigation =
    useNavigation<RootStackScreenProps<'Todo'>['navigation']>();
  const clearCurrentTodo = () => {
    if (currentTodo?.id) {
      dispatch(clearTodo(currentTodo.id));
    }
  };
  const removeCurrentTodo = () => {
    Alert.alert(
      '정말 투두를 삭제하시겠습니까?',
      '삭제한 투두는 복원할 수 없습니다.',
      [
        {
          text: '예',
          onPress: () => {
            if (currentTodo?.id) {
              try {
                dispatch(removeTodo(currentTodo.id));
                navigation.goBack();
              } catch (error) {
                console.log(error);
              }
            }
          },
        },
        {
          text: '아니오',
          onPress: () => 1,
        },
      ],
    );
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
    todo: {
      id: 1,
      title: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      content: '할검낭새ㅑㄴㅇㅁ새ㅑㅜㄴㅇ새ㅑ',
      cleared: false,
      deadline: new Date().getTime(),
      importanceLevel: 'high',
    },
    // todo : currentTodo,
    clearCurrentTodo,
    removeCurrentTodo,
    restoreCurrentTodo,
    moveToTodoEditScreen,
    footerBtnIconSize,
  };
};
