import {useRoute} from '@react-navigation/native';
import {RootStackScreenProps} from '../../navigations/types';

export const useTodoFormScreen = () => {
  const {
    params: {todo},
  } = useRoute<RootStackScreenProps<'TodoForm'>['route']>();
  return {
    todo,
  };
};
