import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigation from './DrawerNavigation';
import TodoFormScreen from '../screens/TodoForm/TodoFormScreen';
import TodoScreen from '../screens/Todo/TodoScreen';
import routes from '../routes';

const Stack = createStackNavigator();

export type RootStackParamList = {
  Drawer: undefined;
  Todo: {todoId: number};
  TodoForm: {todoId: number};
};

const RootNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      title: '',
    }}>
    <Stack.Screen
      name="Drawer"
      component={DrawerNavigation}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name={routes.Todo} component={TodoScreen} />
    <Stack.Screen name={routes.TodoForm} component={TodoFormScreen} />
  </Stack.Navigator>
);

export default RootNavigation;
