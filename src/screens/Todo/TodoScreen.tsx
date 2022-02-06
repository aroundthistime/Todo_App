import React from 'react';
import ViewContainer from '../../components/Layout/ViewContainer/ViewContainer';
import {Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigations/RootNavigation';

type Props = StackNavigationProp<RootStackParamList, 'Todo'>;

const TodoScreen = ({navigation, route}: Props) => {
  return (
    <ViewContainer>
      <Text>Todo</Text>
    </ViewContainer>
  );
};

export default TodoScreen;
