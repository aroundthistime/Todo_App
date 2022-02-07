import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigation, {DrawerParamList} from './DrawerNavigation';
import TodoFormScreen from '../screens/TodoForm/TodoFormScreen';
import TodoScreen from '../screens/Todo/TodoScreen';
import {NavigatorScreenParams} from '@react-navigation/native';
import {Todo} from '../@types/Todo';

export type RootStackParamList = {
  Drawer: NavigatorScreenParams<DrawerParamList>;
  Todo: {todoId: number};
  TodoForm: {todo?: Todo};
};

export const ROOT_NAVIGATION_SCREEN_NAMES: Record<
  string,
  keyof RootStackParamList
> = {
  Drawer: 'Drawer',
  Todo: 'Todo',
  TodoForm: 'TodoForm',
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      title: '',
    }}>
    <Stack.Screen
      name={ROOT_NAVIGATION_SCREEN_NAMES.Drawer}
      component={DrawerNavigation}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={ROOT_NAVIGATION_SCREEN_NAMES.Todo}
      component={TodoScreen}
    />
    <Stack.Screen
      name={ROOT_NAVIGATION_SCREEN_NAMES.TodoForm}
      component={TodoFormScreen}
    />
  </Stack.Navigator>
);

export default RootNavigation;
