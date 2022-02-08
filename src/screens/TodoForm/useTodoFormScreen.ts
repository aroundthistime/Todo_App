import {useRoute} from '@react-navigation/native';
import {RootStackNavigationProps} from '../../navigations/types';

export const useTodoFormScreen = () => {
  const {
    params: {todo},
  } = useRoute<RootStackNavigationProps<'TodoForm'>[]>();
};
