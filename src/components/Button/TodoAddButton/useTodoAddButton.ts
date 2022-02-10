import {useTheme} from '@emotion/react';
import {useNavigation} from '@react-navigation/native';
import {HomeDrawerNavigationProp} from '../../../navigations/types';

type ReturnType = {
  moveToTodoFormScreen: () => void;
  iconSize: number;
};

export const useTodoAddButton = (): ReturnType => {
  const navigation = useNavigation<HomeDrawerNavigationProp>();
  const moveToTodoFormScreen = () => {
    navigation.navigate('TodoForm', {});
  };
  const {
    button: {
      floatingActionButton: {iconSize},
    },
  } = useTheme();
  return {
    moveToTodoFormScreen,
    iconSize,
  };
};
