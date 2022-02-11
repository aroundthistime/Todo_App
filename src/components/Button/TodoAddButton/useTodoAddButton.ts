import {useTheme} from '@emotion/react';
import {useNavigation} from '@react-navigation/native';
import {HomeDrawerNavigationProp} from '../../../navigations/types';

type ReturnType = {
  moveToTodoFormScreen: () => void;
  iconSize: number;
};

export const useTodoAddButton = (date: Date): ReturnType => {
  const navigation = useNavigation<HomeDrawerNavigationProp>();
  const moveToTodoFormScreen = () => {
    navigation.navigate('TodoForm', {date: date});
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
