import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Todo} from '../../@types/Todo';
import {RootState} from '../../modules/root';
import {RootStackScreenProps} from '../../navigations/types';

export const useTodoScreen = () => {
  const {
    params: {todoId},
  } = useRoute<RootStackScreenProps<'Todo'>['route']>();
  const currentTodo: Todo | undefined = useSelector((state: RootState) =>
    state.todos.find(todo => todo.id === todoId),
  );
};
